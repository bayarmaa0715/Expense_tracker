const { Router } = require("express");
const { getAllUser, createUser } = require("../controllers/user-controller");
const router = Router();

router.route("/").get(getAllUser).post(createUser);

module.exports = { router };
