import express from "express";
import { db } from "../server.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const router = express.Router();

// READ (Ambil Semua Konten)
router.get("/", (err, res) => {
  db.query("SELECT * FROM developer_info", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// READ (Berdasarkan ID)
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM developer_info WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res.status(404).json({ message: "Content not found!" });
    }
    res.json(results[0]);
  });
});

export default router;
