"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../authMiddleware");
const router = express_1.default.Router();
// 🚀 Protected Route - Only authenticated users can access
router.get("/dashboard", authMiddleware_1.authenticateUser, (req, res) => {
    res.json({ message: "Welcome to the Dashboard!" });
});
// 🚀 Another Protected Route
router.get("/profile", authMiddleware_1.authenticateUser, (req, res) => {
    res.json({ message: "User profile data" });
});
exports.default = router;
