// /api/send-email.js
const nodemailer = require("nodemailer");

function createTransporter() {
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD, // ✅ KEY FIX
    },
    // Optional; keep if your provider needs it
    tls: { rejectUnauthorized: false },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });
}

module.exports = async (req, res) => {
  // CORS (fine to keep)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method not allowed" });

  try {
    const { to, subject, html, text } = req.body || {};
    if (!to || !subject || !html) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: to, subject, html",
      });
    }

    // Validate env
    const missing = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "SMTP_FROM_EMAIL"].filter(
      (k) => !process.env[k]
    );
    if (missing.length) {
      return res.status(500).json({
        success: false,
        message: "Server email config missing",
        missing,
      });
    }

    const transporter = createTransporter();

    // If verify fails, you'll see it in Vercel logs (still try send)
    try {
      await transporter.verify();
      console.log("✅ SMTP verified");
    } catch (e) {
      console.log("⚠️ SMTP verify failed (may be OK):", e?.message);
    }

    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || "NXXIM"}" <${process.env.SMTP_FROM_EMAIL}>`,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ""),
    });

    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("❌ Send error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error?.message,
      code: error?.code,
    });
  }
};
