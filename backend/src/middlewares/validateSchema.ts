import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";


export const validateSchema = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
        if(req.params.id) {
            req.body.id = req.params.id;
        }
        const result = schema.safeParse(req.body)

        if(!result.success){
            return res.status(400).json({message: result.error.format()});            
        }
                
        next();
}