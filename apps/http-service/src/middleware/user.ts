import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers["authorization"]
    if (!headers) {
        res.status(403).json({
            message: "User not logged in"
        })
        return
    }

    const token = headers.split(" ")[1]
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string }
        req.userId = data.userId
        next();
    } catch (e) {
        res.status(400).json({
            message: "Token was incorrect"
        })
        return;
    }
}

declare global {
    namespace Express {
        export interface Request {
            userId: string;
        }
    }
}