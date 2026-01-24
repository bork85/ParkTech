import type { NextFunction, Request, Response } from "express";
import { UserRole } from "../generated/prisma/enums";

export const validateRole = (requiredRole: UserRole) => (req: Request, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw Error("User not found")
    }
    if(req.user.role !== requiredRole) {
        throw Error("Unauthorized")
    }
    next();
}