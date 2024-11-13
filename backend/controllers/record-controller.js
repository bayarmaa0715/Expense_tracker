const sql = require("../config/db");

const recordInfo = async (req, res) => {
  try {
    const { id } = req.user;
    const [income, expense] =
      await sql`SELECT transaction_type, TO_CHAR((SUM(amount)),'999,999D99')as sum  FROM records WHERE uid=${id} GROUP BY transaction_type `;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "Sql ээс дата гаа авч чадсангүй", error });
  }
};
const balance = async (req, res) => {
  try {
    const { id } = req.user;
    const [minus] =
      await sql`SELECT TO_CHAR((SUM(CASE WHEN transaction_type='INC' THEN amount ELSE 0 END )-SUM(CASE WHEN transaction_type='EXP' THEN amount ELSE 0 END)),'999,999D99') as minus
      FROM records WHERE uid=${id} `;
    res.status(200).json({ minus });
    console.log("minus harah", minus);
  } catch (error) {
    res.status(400).json({
      message: "Sql ээс орлого зарлагн зөррүү дата гаа авч чадсангүй",
      error,
    });
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

const barChartInfo = async (req, res) => {
  try {
    const { id } = req.user; // {id: 123}
    const barData = await sql`
      SELECT 
      TO_CHAR(DATE_TRUNC('day',createdat),'Mon-DD') as date,
      SUM(CASE WHEN transaction_type='EXP' THEN amount ELSE 0 END)/100 as Зардал ,
      SUM(CASE WHEN transaction_type='INC' THEN amount ELSE 0 END)/100 as Орлого
      FROM records 
      WHERE uid=${id}
      GROUP BY DATE_TRUNC('day',createdat) `;
    res.status(200).json({ barData });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Sql ээс Bar chartiin дата гаа авч чадсангүй", error });
  }
};

const recordExpHistory = async (req, res) => {
  try {
    const { id } = req.user;
    const historyData =
      await sql`SELECT id,  name, TO_CHAR(amount,'999,999D99') amount, createdat, transaction_type from records WHERE uid=${id} ORDER BY createdat DESC`;
    res.status(200).json({ historyData });
  } catch (error) {
    res.status(400).json({
      message: "Sql ээс record history дата гаа авч чадсангүй",
      error,
    });
  }
};

const getAllRecord = async (req, res) => {
  try {
    const { id } = req.user;
    const data =
      await sql`SELECT * FROM records WHERE uid=${id} ORDER BY createdat DESC`;
    res.status(200).json({ messageRec: "success get Record", record: data });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Sql ээс all record дата гаа авч чадсангүй", error });
  }
};

const createRecord = async (req, res) => {
  console.log("ADD REC", req.body);

  try {
    const { cid, name, amount, transaction_type, description } = req.body;
    const { id } = req.user;
    console.log("UID", id);
    console.log("ADD REC", cid, name, amount, transaction_type, description);
    const data =
      await sql`INSERT INTO records(uid, cid , name , amount, transaction_type, description ) 
                             VALUES(${id},${cid}, ${name},${amount},${transaction_type},${description})`;

    res.status(200).json({ messageRec: "success CREATE  records" });
  } catch (error) {
    console.log("ERR", error);
    res.status(400).json({ message: "New recored created unsuccessfully" });
  }
};

const updateRecord = async (req, res) => {
  try {
    const { recordID } = req.params;
    const data =
      await sql`UPDATE records SET amount=40000000 WHERE id=${recordID}`;
    res.status(200).json({ message: "success update records", data: data });
  } catch (error) {
    res.status(404).json({ message: "error update records" });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const { recordID } = req.params;
    const data = await sql`DELETE FROM records WHERE id=${recordID}`;
    res.status(200).json({ message: "success delete record", data: data });
  } catch (error) {
    res.status(404).json({ message: "error update records" });
  }
};

module.exports = {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
  recordInfo,
  circleChartInfo,
  balance,
  barChartInfo,
  recordExpHistory,
};
