import { NextFunction } from "express";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_TOKEN;

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> | void => {
  try {
    const cookietoken = req.cookies.authToken;

    if (!cookietoken) {
    res
        .status(401)
        .json({ error: "Unauthorised, Login again, Your session expired!" });
    }

    const verification = jwt.verify(cookietoken, JWT_SECRET!)
    if(verification){
        next();
    }else{
    res.status(401).json({ error: "Invalid token" });

    }
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
