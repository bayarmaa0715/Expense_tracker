const { Router } = require("express");
const {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
  recordInfo,
} = require("../controllers/record-controller");
const router = Router();

router.route("/info").get(recordInfo);
router.route("/").get(getAllRecord).post(createRecord);
router.route("/:recordID").put(updateRecord).delete(deleteRecord);

module.exports = router;
