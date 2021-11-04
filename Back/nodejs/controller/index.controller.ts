import { NextFunction, Request, Response } from "express";

export class IndexController {
    public index = (req: Request, res: Response, next: NextFunction) => {
        try { res.json({ message: 'ok' }) } catch (error) { next(error) }
    }
}