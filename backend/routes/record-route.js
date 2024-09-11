const { Router } = require("express");
const {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
  recordInfo,
  circleChartInfo,
} = require("../controllers/record-controller");
const { auth } = require("../middlewares/auth");
const router = Router();

router.route("/info").get(auth, recordInfo);
router.route("/expenseChartInfo").get(auth, circleChartInfo);
router.route("/").get(getAllRecord).post(createRecord);
router.route("/:recordID").put(updateRecord).delete(deleteRecord);

module.exports = router;
