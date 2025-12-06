import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // 🛡 Anti Spam (optional tambahan)
    if (message.toLowerCase().includes("http")) {
      return Response.json({ ok: false, error: "Possible spam" }, { status: 403 });
    }

    const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, RECEIVER_EMAIL } = process.env;

    console.log("📨 MAIL_USER:", MAIL_USER);
    console.log("📨 RECEIVER_EMAIL:", RECEIVER_EMAIL);

    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      secure: true,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    // 📩 Email to You
    await transporter.sendMail({
      from: `"Portfolio Mail" <${MAIL_USER}>`,
      to: RECEIVER_EMAIL,
      subject: `📬 New Message from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    // 🤖 Auto-Reply to Sender
    await transporter.sendMail({
      from: `"Kevin Simorangkir" <${MAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting me!",
      html: `
        <p>Hello ${name}, 👋</p>
        <p>Thank you for reaching out! I'll get back to you shortly.</p><br>
        — <strong>Kevin Simorangkir</strong>
      `,
    });

    return Response.json({ ok: true });

  } catch (err) {
    console.error("💥 SEND MAIL ERROR:", err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
