
import { Router } from 'express';
import { createAppointment, getAppointmentsForDoctor } from '../controllers/appointmentController';

const router = Router();


router.post('/', createAppointment);
router.get('/:doctorid', getAppointmentsForDoctor)

export default router;
