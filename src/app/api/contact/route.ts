import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  clamp,
  escapeHtml,
  getClientIp,
  isValidEmail,
  rateLimit,
  sanitizeHeader,
} from '@/lib/security';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Per-IP rate limiting: blunt spam/abuse and protect the Resend quota.
    const ip = getClientIp(request);
    if (!rateLimit(`contact:${ip}`, 5, 60_000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot: a hidden field real users never fill in. If a bot fills it,
    // pretend success without sending any email.
    if (body?.company_website) {
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    }

    // Sanitize header-bound fields (strip CR/LF) and clamp lengths.
    const name = sanitizeHeader(clamp(body?.name, 200));
    const email = sanitizeHeader(clamp(body?.email, 254));
    const phone = sanitizeHeader(clamp(body?.phone, 50));
    const organization = sanitizeHeader(clamp(body?.organization, 200));
    const projectType = sanitizeHeader(clamp(body?.projectType, 100));
    const message = clamp(body?.message, 5000);

    // Required fields + strict email validation. The email value is reused as
    // the recipient of a confirmation message, so it MUST be a single valid
    // address to avoid open-relay / spam-amplification abuse.
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide your name, email, and a message.' },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // HTML-escape every interpolated user field before placing in email HTML.
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeOrganization = escapeHtml(organization);
    const safeProjectType = escapeHtml(projectType);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    // Format the email content (owner notification)
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
      ${safeOrganization ? `<p><strong>Organization:</strong> ${safeOrganization}</p>` : ''}
      ${safeProjectType ? `<p><strong>Project Type:</strong> ${safeProjectType}</p>` : ''}
      <h3>Message:</h3>
      <p>${safeMessage}</p>
    `;

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['jduren@weighanchor.com'],
      subject: `New Contact from ${name} - ${organization || 'Direct Inquiry'}`,
      replyTo: email,
      html: emailHtml,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    // Also send a confirmation email to the sender. Only reached after the
    // email has passed isValidEmail (single valid address).
    await resend.emails.send({
      from: 'Weigh Anchor <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting Weigh Anchor',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${safeName},</p>
        <p>We've received your message and will get back to you within one business day.</p>
        <p>If you need immediate assistance, please call us at (407) 687-3792.</p>
        <br>
        <p>Best regards,<br>The Weigh Anchor Team</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          This is an automated response to confirm we received your inquiry.
        </p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
