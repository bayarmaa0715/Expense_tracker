const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  const data = await sql`SELECT * FROM records`;
  res.status(200).json({ messageRec: "success get Record", record: data });
};
const createRecord = async (req, res) => {
  const data = await sql`INSERT INTO records(
uid  ,
cid  ,
name  ,
amount ,
transaction_type ,
description) 
VALUES
(
${name},
uid=${uid},
${cid},
${amount},
${descriptio},
${transaction_type},
${category_img}
)`;

  res.status(200).json({ messageRec: "success CREATE  records", record: data });
};

const updateRecord = async (req, res) => {
  const { recordID } = req.params;
  const data =
    await sql`UPDATE records SET amount=40000000 WHERE id=${recordID}`;
  res.status(200).json({ message: "success update records", data: data });
};

const deleteRecord = async (req, res) => {
  const { recordID } = req.params;
  const data = await sql`DELETE FROM records WHERE id=${recordID}`;
  res.status(200).json({ message: "success delete record", data: data });
};

module.exports = {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};
