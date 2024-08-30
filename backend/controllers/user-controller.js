const sql = require("../config/db");

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("data", data);
  res.status(200).json({ message: "success", user: data });
};
const createUser = async (req, res) => {
  const data =
    await sql`INSERT INTO users(email,name,password,profile_img,createdAt) VALUES('sododdo@gmail.com','Sodoo','Bayarkhuu','img.png','2023-12-12T00:00:00.000+08')`;
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
module.exports = { getAllUser, createUser, updateUser, deleteUser };
