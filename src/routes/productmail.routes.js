import { Router } from "express"
import { sendMail } from "../controllers/productmail.controllers.js"

const router = Router()

router.post("/product/sendmail", sendMail)

export default router