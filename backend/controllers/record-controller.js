const sql = require("../config/db");

const recordInfo = async (req, res) => {
  try {
    const { id } = req.user;
    const [income, expense] =
      await sql`SELECT transaction_type, SUM(amount) FROM records WHERE uid=${id} GROUP BY transaction_type `;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "Sql ээс дата гаа авч чадсангүй", error });
  }
};

const circleChartInfo = async (req, res) => {
  try {
    const { id } = req.user; // {id: 123}
    const eChartdata = await sql`
      SELECT c.name, SUM(r.amount) 
      FROM records r INNER JOIN categories c ON r.cid=c.id 
      WHERE r.transaction_type='EXP' AND r.uid=${id}
      GROUP BY c.name`;
    res.status(200).json({ eChartdata });
  } catch (error) {
    res.status(400).json({ message: "Sql ээс дата гаа авч чадсангүй", error });
  }
};

const getAllRecord = async (req, res) => {
  const data = await sql`SELECT * FROM records`;
  res.status(200).json({ messageRec: "success get Record", record: data });
};

const createRecord = async (req, res) => {
  const { uid, cid, name, amount, transaction_type, description } = req.body;
  const data = await sql`INSERT INTO records(
uid  ,
cid  ,
name  ,
amount ,
transaction_type ,
description) 
VALUES
(

${uid},
${cid},
${name},
${amount},
${description},
${transaction_type},
${category_img}
)`;

  res
    .status(200)
    .json({ messageRec: "success CREATE  records", createRecord: data });
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
  recordInfo,
  circleChartInfo,
};
