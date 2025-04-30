import express from "express";
import { db } from "../server.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// READ - Get all gallery images by cluster_id
router.get("/cluster/:cluster_id", (req, res) => {
  const { cluster_id } = req.params;
  const sql = "SELECT * FROM cluster_gallery WHERE cluster_id = ?";
  db.query(sql, [cluster_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res
        .status(404)
        .json({ message: "No images found for this cluster" });
    }
    res.json(results);
  });
});

export default router;
