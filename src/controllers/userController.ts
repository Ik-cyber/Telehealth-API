import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import configVal from '../config/config';
import User from '../models/user.module';

const saltRounds = 10;
const { JWTSECRET } = configVal;

interface UserData {
  id: any;
  username: string;
  role: string;
}

const generateJsonWebToken = (user: UserData) => {
  if (!JWTSECRET) {
    throw new Error('JWTSECRET is not defined');
  }

  const payload = {
    id: user.id,
    username: user.username,
    role: user.role
  };

  return jwt.sign(payload, JWTSECRET as Secret, { expiresIn: '1h' });
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const userData: UserData = { id: user._id, role: user.role, username: user.username };
    const token = generateJsonWebToken(userData);

    res.status(200).json({ user, token });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({ username: name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: 'User successfully added.' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
