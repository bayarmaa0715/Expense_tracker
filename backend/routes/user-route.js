const { Router } = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");
const router = Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:userID").put(updateUser).delete(deleteUser);

module.exports = router;
