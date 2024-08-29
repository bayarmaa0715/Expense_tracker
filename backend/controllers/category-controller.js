const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  const data = await sql`SELECT * FROM categories`;
  console.log("data", data);
  res.status(200).json({ messageCat: "success category", category: data });
};
const createCategory = async (req, res) => {
  const data =
    await sql`INSERT INTO categories(name,description,category_img,createdAt) VALUES
('irred','Hello everyone I am category query','img.png','2023-12-12T00:00:00.000+08')`;
  console.log("data", data);
  res.status(200).json({ messageCat: "success category", category: data });
};
const updateCategory = async (req, res) => {
  const categoryID = params(categoryID);
  const data = await sql`DELETE FROM categories WHERE id=${categoryID}`;
  console.log("data", data);
  res.status(200).json({ messageCat: "success category", category: data });
};
const deleteCategory = () => {};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
