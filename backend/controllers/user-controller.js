const sql = require("../config/db");

const getCurrentUser = async (req, res) => {
  try {
    const { id } = req.user;
    const [data] = await sql`SELECT * FROM users WHERE id=${id}`;
    res.status(200).json({ message: "success current user", user: data });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("data", data);
  res.status(200).json({ message: "success", user: data });
};
const createUser = async (req, res) => {
  const { email, name, password, profile_img, createdAt } = req.body;
  const data =
    await sql`INSERT INTO users(email,name,password,profile_img,createdAt) VALUES(${email},${name},${password},${profile_img},${createdAt})`;
  res.status(200).json({ message: "success record", data: data });
};
const updateUser = async (req, res) => {
  const { userID } = req.params;
  const data = await sql`UPDATE users SET name='Ireedui' WHERE id=${userID}`;
  res.status(200).json({ message: "success update record", data: data });
};
const deleteUser = async (req, res) => {
  const { userID } = req.params;
  const data = await sql`DELETE FROM users WHERE id=${userID}`;
  res.status(200).json({ message: "success update record", data: data });
};
module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser,
};
