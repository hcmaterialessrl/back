import { pool } from "../db.js";
import jwt from "jsonwebtoken";
import config from "../config.js";

export const userRegister = async (req, res) => {
  try {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const city = req.body.city;
    const telephone = req.body.telephone;
    const name = first_name.toUpperCase() + " " + last_name.toUpperCase();
    await pool.query(
      `INSERT INTO users (name, city, telephone, email, password) VALUES("${name}","${city}","${telephone}","${email}",MD5("${password}"))`
    );
    res.status(200).send("User created successfully!");
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const [user] = await pool.query(
      `SELECT * FROM users WHERE email = "${email}" AND password = MD5("${password}")`
    );
    if (!user[0]) throw new Error("Usuario no encontado");
    const token = jwt.sign({ id: user[0].id }, "asdasdasd");
    res.json({ auth: true, token, id: user[0].id });  
    console.log(user[0]);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [user] = await pool.query(
      `SELECT * FROM users WHERE id = ${id}`
    );
    console.log(user[0])
    res.json(user);
  } catch (error) {
    console.log(error)
  }
}
