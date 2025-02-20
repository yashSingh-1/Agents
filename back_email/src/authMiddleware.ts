import { NextFunction } from "express";
import { Request, Response } from "express";

interface AuthRequest extends Request {
  userId?: string;
}

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cookietoken = req.cookies.authToken;

    if (!cookietoken) {
      return res
        .status(401)
        .json({ error: "Unauthorised, Login again, Your session expired!" });
    }

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
