import express from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { prisma } from "../client";
import dotenv from "dotenv"

dotenv.config();

const JWT_TOKEN = process.env.JWT_TOKEN;

const router = express.Router();

router.post("/api/register", async (req, res): Promise<any> => {
    try {
        const {email, password} = req.body;

        const exsistingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if(exsistingUser) return res.status(400).json({error: "User already exitsts!"});

        const hashedPass = await bcrypt.hash(password, 10);

        const newuser = await prisma.user.create({
            data: {
                email: email,
                password: hashedPass
            }
        })

        const token = jwt.sign({userId: newuser.id}, JWT_TOKEN!, {
            expiresIn: "1h"
        })

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax"
        })

        return res.status(201).json({message: "User Created successfully", token});
    } catch (error) {
        return res.status(500).json({ error: error });
    }
})

router.post("/api/login", async (req, res): Promise<any> => {
    try {
        const {email, password} = req.body;

        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(!existingUser){
            res.status(400).json({error: "Invalid Credentials!"})
        }

        const passCompare = await bcrypt.compare(password, existingUser!.password);
        if(!passCompare) return res.status(400).json({error: "Invalid Credentials"})

        const token = jwt.sign({userId: existingUser?.id}, JWT_TOKEN!, {
            expiresIn: "1h"
        })

        res.cookie("authToken", token, { httpOnly: true, secure: true, sameSite: "strict" })

        res.status(200).json({message: "Login Successful"})
    } catch (error) {
        res.json({error: "Server Error, Try Again"})
    }

})

router.post("/logout", (req, res): void => {
    res.clearCookie("authToken"); // Clear the cookie
    res.json({ message: "Logged out successfully" });
});

export default router;