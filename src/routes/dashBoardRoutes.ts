import { Router } from 'express';
import { getUserProfile } from '../controllers/dashboardController';

const router = Router();

router.get('/', getUserProfile);


export default router;
