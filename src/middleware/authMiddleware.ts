import { Request, Response, NextFunction } from 'express';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import configVal from '../config/config';

const { JWTSECRET } = configVal;

interface CustomRequest extends Request {
  user?: JwtPayload;
}

export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;

  if (token == null) return res.status(401).json({ message: 'Token missing' });

  jwt.verify(token, JWTSECRET as Secret, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token is not valid' });

    req.user = user as JwtPayload; 
    next();
  });
};
