import { Router } from "express";
import userRoutes from "./userRoutes"
import dashBoardRoutes from "./dashBoardRoutes"

const router = Router()

router.use("/users", userRoutes)
router.use("/dashboard", dashBoardRoutes)


export default router