import { Router } from "express"
import { getCategories } from "../controllers/categories.controllers.js"
import { getCategoriesId } from "../controllers/categories.controllers.js"
import { getSubCategories } from "../controllers/categories.controllers.js"

const router = Router()

router.get("/categories", getCategories)
router.get("/subcategories", getSubCategories)
router.get("/categories/:id", getCategoriesId)

export default router