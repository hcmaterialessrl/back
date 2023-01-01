import { Router } from "express"
import { addCartProduct } from "../controllers/cart.controllers.js"
import { getCartProducts } from "../controllers/cart.controllers.js"

const router = Router()

router.post("/cart/product", addCartProduct)
router.get("/cart/products/:id", getCartProducts)

export default router