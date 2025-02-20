"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("../client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_TOKEN = process.env.JWT_TOKEN;
const router = express_1.default.Router();
router.post("/api/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const exsistingUser = yield client_1.prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (exsistingUser)
            return res.status(400).json({ error: "User already exitsts!" });
        const hashedPass = yield bcryptjs_1.default.hash(password, 10);
        const newuser = yield client_1.prisma.user.create({
            data: {
                email: email,
                password: hashedPass
            }
        });
        const token = jsonwebtoken_1.default.sign({ userId: newuser.id }, JWT_TOKEN, {
            expiresIn: "1h"
        });
        res.cookie("authToken", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict"
        });
        return res.status(201).json({ message: "User Created successfully", token });
    }
    catch (error) {
        return res.status(500).json({ error: error });
    }
}));
router.post("/api/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const existingUser = yield client_1.prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!existingUser) {
            res.status(400).json({ error: "Invalid Credentials!" });
        }
        const passCompare = yield bcryptjs_1.default.compare(password, existingUser.password);
        if (!passCompare)
            return res.status(400).json({ error: "Invalid Credentials" });
        const token = jsonwebtoken_1.default.sign({ userId: existingUser === null || existingUser === void 0 ? void 0 : existingUser.id }, JWT_TOKEN, {
            expiresIn: "1h"
        });
        res.cookie("authToken", token, { httpOnly: true, secure: true, sameSite: "strict" });
        res.status(200).json({ message: "Login Successful" });
    }
    catch (error) {
        res.json({ error: "Server Error, Try Again" });
    }
}));
router.post("/logout", (req, res) => {
    res.clearCookie("authToken"); // Clear the cookie
    res.json({ message: "Logged out successfully" });
});
exports.default = router;
