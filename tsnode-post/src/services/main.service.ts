import { NextFunction, Request, Response } from 'express';

export function sayHello(req: Request, res: Response, next: NextFunction) {
    res.json({ message: 'Welcome to ts-node application' });
}
