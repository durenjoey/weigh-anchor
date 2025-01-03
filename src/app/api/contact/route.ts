import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received contact form submission:', body);
    
    // Here you would typically handle the contact form submission
    // For example, sending an email or saving to a database
    
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    );
  }
}
