import express from "express";
import multer from "multer";
import cors from "cors";
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// File upload setup
const upload = multer({ dest: path.join(__dirname, "uploads/") });

// ✅ Check if backend running
app.get("/", (req, res) => {
  res.send("✅ Backend server is running!");
});

// ✅ Handle file upload and call Python script
app.post("/process-image", upload.single("file"), (req, res) => {
  const filePath = req.file?.path;
  if (!filePath) return res.status(400).json({ error: "No file uploaded" });

  console.log("📸 Received file:", filePath);

  // Run Python script
  const python = spawn("python", [
    path.join(__dirname, "script.py"),
    filePath,
  ]);

  let pythonOutput = "";
  python.stdout.on("data", (data) => (pythonOutput += data.toString()));
  python.stderr.on("data", (data) => console.error("🐍 Python error:", data.toString()));

  python.on("close", (code) => {
    console.log(`🐍 Python exited with code ${code}`);
    const outputPath = pythonOutput.trim();

    if (fs.existsSync(outputPath)) {
      console.log("✅ Sending converted file:", outputPath);
      res.download(outputPath, "converted.jpeg");
    } else {
      res.status(500).json({ error: "Conversion failed" });
    }
  });
});

app.listen(5000, () => console.log("✅ Backend running on port 5000"));
