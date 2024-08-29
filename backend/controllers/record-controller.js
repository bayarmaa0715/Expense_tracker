const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  const data = await sql`SELECT * FROM records`;
  res.status(200).json({ messageRec: "success Record", record: data });
};
const createRecord = async (req, res) => {
  const data = await sql`INSERT INTO records() VALUES
    ('GUNEE@gmail.com','SODOO','fjlks','img.png','2023-12-12T00:00:00.000+08') `;

  res.status(200).json({ messageRec: "success CREATE", record: data });
};
const updateRecord = async (req, res) => {
  const data = await sql`DELETE FROM records`;
};
const deleteRecord = () => {};

module.exports = {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};
