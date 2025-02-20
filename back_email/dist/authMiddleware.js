"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_TOKEN;
const authenticateUser = (req, res, next) => {
    try {
        const cookietoken = req.cookies.authToken;
        if (!cookietoken) {
            res
                .status(401)
                .json({ error: "Unauthorised, Login again, Your session expired!" });
        }
        const verification = jsonwebtoken_1.default.verify(cookietoken, JWT_SECRET);
        if (verification) {
            next();
        }
        else {
            res.status(401).json({ error: "Invalid token" });
        }
    }
    catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
};
exports.authenticateUser = authenticateUser;
