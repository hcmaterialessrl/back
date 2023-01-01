import { pool } from "../db.js";

export const getNewestProducts = async (req, res) => {
  try {
    const [product] = await pool.query(
      `SELECT * FROM products ORDER BY id DESC LIMIT 5`
    );
    res.json(product);
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const [product] = await pool.query(
      `SELECT * FROM products WHERE id = ${id}`
    );
    res.json(product);
  } catch (error) {
    console.log(error);
  }
};

export const getSubCategoryProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const [products] = await pool.query(
      `SELECT * FROM products WHERE sub_category_id = ${id}`
    );
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByName = async (req, res) => {
  try {
    const { name } = req.params;
    const [products] = await pool.query(
      `SELECT * FROM products WHERE name LIKE "%${name}%"`
    );
    console.log(products)
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

export const getProductsFiltered = async (req, res) => {
  try {
    const { brand } = req.params;
    const [products] = await pool.query(
      `SELECT * FROM products WHERE brand = "${brand}"`
      );
      console.log(products)
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};


// export const getProductsCart = async (req, res) => {
//   try {
//     const {cart} = req.params
//     // let ids = cart.map((d) => d.id)
//     // const [product] = await pool.query(
//     //   `SELECT * FROM products WHERE id = ${cart.id}`
//     // );
//     // res.json(product);
//     console.log(cart)
//   } catch (error) {
//     console.log(error)
//   }
// }
