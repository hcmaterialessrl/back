import { pool } from "../db.js";

export const getCategories = async (req, res) => {
  try {
    const [categories] = await pool.query("SELECT * FROM categories");
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const getSubCategories = async (req, res) => {
  try {
    const [sub_categories] = await pool.query("SELECT * FROM sub_category");
    res.json(sub_categories);
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesId = async (req, res) => {
  try {
    const { id } = req.params;
    const [products] = await pool.query(
      `SELECT * FROM products WHERE category_id = ${Number(id)}`
    );
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};
