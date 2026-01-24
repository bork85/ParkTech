import { NextFunction, Request, Response } from "express";

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }
    res.status(500).json({ error: 'Internal server error' })
}