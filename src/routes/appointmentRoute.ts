
import { Router } from 'express';
import { createAppointment, getAppointmentsForDoctor } from '../controllers/appointmentController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();


router.post('/', authMiddleware, createAppointment);
router.get('/:doctorid', authMiddleware, getAppointmentsForDoctor)

export default router;
