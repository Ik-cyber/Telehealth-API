import { Router } from "express";
import userRoutes from "./userRoutes"
import appointmentRoutes from "./appointmentRoute"

const router = Router()

router.use("/users", userRoutes)
router.use("/appointment", appointmentRoutes)


export default router