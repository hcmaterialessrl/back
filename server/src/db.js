import { createPool } from "mysql2/promise"
import {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USER
} from "./config.js"

export const pool = createPool({
    // host: "localhost",
    // user: "id20063422_hugocieri",
    // password: "Ptu!5Y?HbE8(Cl*l",
    // port: 21,
    // database: "id20063422_hcmaterialessrl"
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
})