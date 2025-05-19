import express from "express";
import { db } from "../server.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// READ (Ambil Semua Konten)
router.get("/", (req, res) => {
  db.query("SELECT * FROM cluster_spesifikasi", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// READ (Berdasarkan ID)
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM cluster_spesifikasi WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res.status(404).json({ message: "Content not found!" });
    }
    res.json(results[0]);
  });
});

// READ - Get all spesifikasi by cluster_id
router.get("/cluster/:cluster_id", (req, res) => {
  const { cluster_id } = req.params;

  const sql = "SELECT * FROM cluster_spesifikasi WHERE cluster_id = ?";
  db.query(sql, [cluster_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res.status(404).json({ message: "Content not found!" });
    }
    res.json(results);
  });
});

export default router;
