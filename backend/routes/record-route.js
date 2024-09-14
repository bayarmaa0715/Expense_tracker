const { Router } = require("express");
const {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
  recordInfo,
  circleChartInfo,
  balance,
  barChartInfo,
} = require("../controllers/record-controller");
const { auth } = require("../middlewares/auth");
const router = Router();

router.route("/balance").get(auth, balance);
router.route("/info").get(auth, recordInfo);
router.route("/expenseChartInfo").get(auth, circleChartInfo);
router.route("/barChartInfo").get(auth, barChartInfo);
router.route("/").get(auth, getAllRecord).post(createRecord);
router.route("/:recordID").put(updateRecord).delete(deleteRecord);

module.exports = router;
