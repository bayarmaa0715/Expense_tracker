const sql = require("../config/db");

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("data", data);
  res.status(200).json({ message: "success", user: data });
};
const createUser = () => {};
const updateUser = () => {};
const deleteUser = () => {};
module.exports = { getAllUser, createUser, updateUser, deleteUser };
