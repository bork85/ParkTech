/// <reference path="../@types/express.d.ts" />
import type { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";
import { UserPayload } from "../@types/user";

export const validateAuth = (req: Request, _res: Response, next: NextFunction)=> {
    const header = req.headers.authorization;
    if(!header) return Error('Token não enviado');

    const token = header.split(' ')[1];

    if(!token) return Error('Token não configurado');

    const secret = process.env.JWT_SECRET_KEY as string;

    if(!secret) return Error('JWT não configurado');

    try {
        const decoded = jwt.verify(token, secret) as UserPayload
        req.user = {
            id: decoded.id,
            role: decoded.role
        }
        
    } catch (err) {
        throw Error("Token inválido")
    }

    next();
}