import { Request, Response } from 'express';
import Appointment from '../models/appointment.module';

export const createAppointment = async (req: Request, res: Response) => {
  const { userId, doctorId, dateTime, description } = req.body;

  try {
    const overlappingAppointments = await Appointment.find({
      doctorId,
      dateTime: {
        $gte: new Date(dateTime).setMinutes(0),
        $lt: new Date(dateTime).setMinutes(59),
      }
    });

    if (overlappingAppointments.length > 0) {
      return res.status(400).json({ message: 'Time slot already booked' });
    }

    const appointment = new Appointment({ userId, doctorId, dateTime, description });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAppointmentsForDoctor = async (req: Request, res: Response) => {
  const { doctorId } = req.params;

  try {
    const appointments = await Appointment.find({ doctorId }).populate('userId', 'username');
    res.json(appointments);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
