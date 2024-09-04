const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM categories`;
    console.log("data", data);
    res
      .status(200)
      .json({ messageCat: "success get category", category: data });
  } catch (error) {
    res.status(401).json({ messageCat: "Client Error" });
  }
};

const createCategory = async (req, res) => {
  const { name, description, category_img, createdAt } = req.body;
  const data =
    await sql`INSERT INTO categories(name,description,category_img,createdAt) VALUES
(${name},${description},${category_img},${createdAt})`;
  console.log("data", data);
  res
    .status(200)
    .json({ messageCat: "success create category", category: data });
};

const updateCategory = async (req, res) => {
  const { categoryID } = req.params;
  const data =
    await sql`UPDATE categories SET name='Sodoo' WHERE id=${categoryID}`;

  res
    .status(200)
    .json({ messageCat: "success  update category", category: data });
};

const deleteCategory = async (req, res) => {
  const { categoryID } = req.params;
  const data = await sql`DELETE FROM categories WHERE id=${categoryID}`;
  console.log("data", data);
  res
    .status(200)
    .json({ messageCat: "success delete category", category: data });
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
