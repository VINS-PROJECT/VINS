import nodemailer from "nodemailer";

/* =========================================================
   POST /api/contact
   ========================================================= */
export async function POST(req) {
  try {
    const { name, email, message, honey, token } = await req.json();

    /* ================= BASIC VALIDATION ================= */
    if (!name || !email || !message || !token) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ================= HONEYPOT ================= */
    if (honey) {
      return Response.json(
        { ok: false, error: "Bot detected" },
        { status: 403 }
      );
    }

    /* ================= SIMPLE SPAM HEURISTIC ================= */
    if (/https?:\/\//i.test(message)) {
      return Response.json(
        { ok: false, error: "Links are not allowed" },
        { status: 403 }
      );
    }

    /* ================= reCAPTCHA v3 VERIFY ================= */
    const verify = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        }),
      }
    );

    const captcha = await verify.json();

    if (!captcha.success || captcha.score < 0.5) {
      console.warn("🚨 reCAPTCHA rejected:", captcha);
      return Response.json(
        { ok: false, error: "Captcha verification failed" },
        { status: 403 }
      );
    }

    /* ================= MAIL CONFIG ================= */
    const {
      MAIL_HOST,
      MAIL_PORT,
      MAIL_USER,
      MAIL_PASS,
      RECEIVER_EMAIL,
    } = process.env;

    if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS || !RECEIVER_EMAIL) {
      throw new Error("Mail environment variables missing");
    }

    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT),
      secure: true,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    /* ================= EMAIL TO YOU ================= */
    await transporter.sendMail({
      from: `"Portfolio Mail" <${MAIL_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: `📬 New Message from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-line">${message}</p>
      `,
    });

    /* ================= AUTO-REPLY ================= */
    await transporter.sendMail({
      from: `"Kevin Simorangkir" <${MAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting me!",
      html: `
        <p>Hello ${name}, 👋</p>
        <p>
          Thank you for reaching out. I’ve received your message and will
          respond as soon as possible.
        </p>
        <br />
        <p>Best regards,</p>
        <strong>Kevin Simorangkir</strong>
      `,
    });

    return Response.json({ ok: true });

  } catch (err) {
    console.error("💥 CONTACT API ERROR:", err);
    return Response.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
