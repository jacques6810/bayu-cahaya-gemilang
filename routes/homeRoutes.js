import express from "express";
import { db } from "../server.js"; // Import the database connection from server.js
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// READ (Ambil Semua Konten)
router.get("/", (req, res) => {
  db.query("SELECT * FROM home_sections", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// READ (Ambil Konten Berdasarkan ID)
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM home_sections WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0)
      return res.status(404).json({ error: "home_sections not found" });
    res.json(result[0]);
  });
});

export default router;
