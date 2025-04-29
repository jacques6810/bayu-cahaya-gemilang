import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import homeRoutes from "./routes/homeRoutes.js";
import clusterRoutes from "./routes/clusterRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import aboutInfoRoutes from "./routes/aboutInfoRoutes.js";
import aboutPointRoutes from "./routes/aboutPointRoutes.js";
import developerRoutes from "./routes/developerRoutes.js";
import kontakRoutes from "./routes/kontakRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MySQL connection
export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database.");
});

// Routes
app.use("/api/home", homeRoutes);
app.use("/api/cluster", clusterRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/about-info", aboutInfoRoutes);
app.use("/api/about-point", aboutPointRoutes);
app.use("/api/developer", developerRoutes);
app.use("/api/kontak", kontakRoutes);

// Jalankan server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
