const { Router } = require("express");
const {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/record-controller");
const router = Router();

router.route("/").get(getAllRecord).post(createRecord);
router.route("/:recordID").put(updateRecord).delete(deleteRecord);

module.exports = router;
