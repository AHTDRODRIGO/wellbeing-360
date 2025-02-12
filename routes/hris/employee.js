const express = require("express");
const { addEmployee } = require("../../controllers/hris/employee/addemployee");

const router = express.Router();

router.post("/add", addEmployee);

module.exports = router;
