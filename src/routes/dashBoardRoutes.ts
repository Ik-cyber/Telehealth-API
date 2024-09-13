import { Router } from 'express';
import { getUserProfile } from '../controllers/dashboardController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticateToken, getUserProfile);


export default router;
