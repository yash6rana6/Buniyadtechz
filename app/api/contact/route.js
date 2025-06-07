// /app/api/contact/route.js

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Please fill all the fields." }),
        { status: 400 }
      );
    }

    // Setup transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,       // apna gmail id environment variable me rakho
        pass: process.env.GMAIL_PASS,       // app password environment variable me
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
