import { NextFunction, Request, Response } from 'express';
import CustomError from '../types/error.types';

export function handleError(error: CustomError, req: Request, res: Response, next: NextFunction) {
    res.status(error.statusCode).json({ statusCode: error.statusCode, message: error.message });
}
