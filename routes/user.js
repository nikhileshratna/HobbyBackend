const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { deleteUser } = require("../controller/deleteUser");
const { getUser } = require("../controller/getUsers");
const {sendMail} = require("../controller/sendMail");
const { updateUser } = require("../controller/updateUser");
router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.post("/mail",sendMail)
router.post("/delete",deleteUser);
router.post("/update",updateUser)

module.exports = router;
