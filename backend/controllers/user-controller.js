const sql = require("../config/db");

const getCurrentUser = async (req, res) => {
  try {
    const { id } = req.user;
    console.log("id", id);
    const [data] =
      await sql`SELECT email,name,password,profile_img, TO_CHAR(createdat,'YYYY-MM-DD') as createdAt  FROM users WHERE id=${id}`;
    res.status(200).json({ message: "success current user", user: data });
  } catch (error) {
    res.status(500).json({ message: " current user error" });
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    // console.log("data", data);
    res.status(200).json({ message: "success", user: data });
  } catch (error) {
    res.status(404).json({ message: "niit hereglegch harahad aldaa garlaa" });
  }
};
const createUser = async (req, res) => {
  try {
    const { email, name, password, profile_img, createdAt } = req.body;
    const data =
      await sql`INSERT INTO users(email,name,password,profile_img,createdAt) VALUES(${email},${name},${password},${profile_img},${createdAt})`;
    res.status(200).json({ message: "success record", data: data });
  } catch (error) {
    res.status(404).json({ message: " hereglegch uusgehed aldaa garlaa" });
  }
};
const updateUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const data = await sql`UPDATE users SET name='Ireedui' WHERE id=${userID}`;
    res.status(200).json({ message: "success update record", data: data });
  } catch (error) {
    res.status(404).json({ message: " hereglegch update aldaa garlaa" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const data = await sql`DELETE FROM users WHERE id=${userID}`;
    res.status(200).json({ message: "success update record", data: data });
  } catch (error) {
    res.status(404).json({ message: " hereglegch delete aldaa garlaa" });
  }
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser,
};
