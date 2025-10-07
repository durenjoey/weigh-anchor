import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, organization, projectType, message } = body;

    // Format the email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
      ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['jduren@weighanchor.com'],
      subject: `New Contact from ${name} - ${organization || 'Direct Inquiry'}`,
      reply_to: email,
      html: emailHtml,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    // Also send a confirmation email to the sender
    await resend.emails.send({
      from: 'Weigh Anchor <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting Weigh Anchor',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${name},</p>
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