import type { NextFunction, Request, Response } from "express";
import { UserRole } from "../generated/prisma/enums";
import { AppError } from "../utils/errors";

export const validateRole = (requiredRole: UserRole) => (req: Request, res: Response, next: NextFunction) => {
    if(!req.user) {
        throw new AppError("User not found", 403)
    }
    if(req.user.role !== requiredRole) {
        throw new AppError("Unauthorized", 403)
    }
    next();
}