import express from "express";
import { authenticateUser } from "../authMiddleware";

const router = express.Router();

// 🚀 Protected Route - Only authenticated users can access
router.get("/dashboard", authenticateUser, (req, res) => {
  res.json({ message: "Welcome to the Dashboard!" });
});

// 🚀 Another Protected Route
router.get("/profile", authenticateUser, (req, res) => {
  res.json({ message: "User profile data" });
});

export default router;
