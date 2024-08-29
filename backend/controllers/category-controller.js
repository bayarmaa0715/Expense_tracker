const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  const data = await sql`SELECT * FROM categories`;
  console.log("data", data);
  res.status(200).json({ messageCat: "success category", category: data });
};
const createCategory = () => {};
const updateCategory = () => {};
const deleteCategory = () => {};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
