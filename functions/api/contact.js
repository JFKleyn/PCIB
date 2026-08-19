export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { fullName, email, phone, message } = await request.json();

    if (!env.RESEND_API_KEY || !env.FROM_EMAIL || !env.TO_EMAIL) {
      return Response.json(
        { error: "Email environment variables are missing." },
        { status: 500 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: [env.TO_EMAIL],
        reply_to: email,
        subject: `New PCIB website enquiry from ${fullName}`,
        html: `
          <h2>New PCIB Website Enquiry</h2>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.json();

      return Response.json(
        { error: "Failed to send email.", details: error },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Sent successfully.",
    });
  } catch{
    return Response.json(
      { error: "Something went wrong while sending." },
      { status: 500 }
    );
  }
}