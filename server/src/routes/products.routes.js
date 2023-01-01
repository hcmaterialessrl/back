import { Router } from "express"
import { getProductDetail } from "../controllers/products.controllers.js"
import { getNewestProducts } from "../controllers/products.controllers.js"
import { getSubCategoryProducts } from "../controllers/products.controllers.js"
import { getProductsByName } from "../controllers/products.controllers.js"
import { getProductsFiltered } from "../controllers/products.controllers.js"
// import { getProductsCart } from "../controllers/products.controllers.js"


const router = Router()

router.get("/product/detail/:id", getProductDetail)
router.get("/products/newest", getNewestProducts)
router.get("/products/subcategory/:id", getSubCategoryProducts)
router.get("/products/name/:name", getProductsByName)
router.get("/products/filtered/:brand", getProductsFiltered)
// router.get("/products/cart/:cart", getProductsCart)

export default router