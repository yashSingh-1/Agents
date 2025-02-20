import express, {Request, Response} from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./routes/authRoutes";
import { authenticateUser } from "./authMiddleware";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true, // Allow cookies
    })
);

app.use("/auth", authRoutes);

app.listen(port, () => console.log("BE running on port ", {port}))