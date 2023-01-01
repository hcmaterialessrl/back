import { Router } from "express"
import { userRegister,userLogin, getUser } from "../controllers/users.controllers.js"

const router = Router()

router.post("/user/register", userRegister)
router.post("/user/login", userLogin)
router.get("/user/:id", getUser)      


export default router