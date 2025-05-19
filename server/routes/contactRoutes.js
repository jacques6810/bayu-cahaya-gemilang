import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, phone, email, message } = req.body;

  // Validasi input dasar
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: "Semua field wajib diisi." });
  }

  // Setup transporter Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Alamat email pengirim
      pass: process.env.EMAIL_PASS, // App Password Gmail
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: `Formulir Kontak Website - Pesan dari ${name}`,
    text: `
  Yth. Tim ${process.env.COMPANY_NAME || "Perusahaan"},
  
  Anda menerima pesan dari formulir kontak website dengan rincian sebagai berikut:
  
  📌 Nama       : ${name}
  📞 No. HP     : ${phone}
  ✉️ Email      : ${email}
  
  📝 Pesan:
  ${message}
  
  Harap segera ditindaklanjuti jika diperlukan.
  
  Terima kasih.
  
  Salam hormat,  
  Sistem Website ${process.env.COMPANY_NAME || "Perusahaan"}

  *note: HATI-HATI TERHADAP LINK PHISHING !!! JANGAN KLIK LINK YANG TIDAK DIKENAL*
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Pesan berhasil dikirim." });
  } catch (error) {
    console.error("Email gagal dikirim:", error);
    res.status(500).json({ error: "Gagal mengirim email. Coba lagi nanti." });
  }
});

export default router;
