const { Router } = require("express");
const {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category-controller");
const router = Router();

router.route("/").get(getAllCategory).post(createCategory);
router.route("/:categoryID").put(updateCategory).delete(deleteCategory);

module.exports = router;
