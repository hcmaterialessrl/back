import express from "express"
import categoriesRoutes from "./routes/categories.routes.js"
import productsRoutes from "./routes/products.routes.js"
import usersRoutes from "./routes/users.routes.js"
import cartRoutes from "./routes/cart.routes.js"
import productMail from "./routes/productmail.routes.js"
import cors from "cors";
import { PORT } from "./config.js"
const app = express()

app.use(express.json())

app.use(cors());

app.use(categoriesRoutes, productsRoutes, usersRoutes, cartRoutes, productMail)

app.listen(PORT)

console.log("Listening on 3001")