import { pool } from "../db.js";

export const addCartProduct = async (req, res) => {
  const idUsuario = req.body.idUsuario;
  const idProducto = req.body.idProducto;
  const cantidad = req.body.cantidad;
  try {
    await pool.query(
      `INSERT INTO cart (idUsuario, idProducto, cantidad) VALUES("${idUsuario}","${idProducto}", "${cantidad}")`
    );
    res.status(200).send("Producto add successfully!");
  } catch (error) {
    console.log(error);
  }
};

export const getCartProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const [products] = await pool.query(
      `SELECT * FROM cart WHERE idUsuario = ${Number(id)}`
    );
    const productos = products.map((d) => d.idProducto);
    const pro = [];
    for (let i = 0; i < products.length; i++) {
      const [d] = await pool.query(
        `SELECT * FROM products WHERE id = ${productos[i]}`
      );
      pro.push(d);
    }
    res.json(pro);
  } catch (error) {
    console.log(error);
  }
};
