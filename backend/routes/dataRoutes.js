const express = require("express");
const { getAllData, createData } = require("../controllers/dataController");

const router = express.Router();

router.get("/", getAllData);
router.post("/", createData);

module.exports = router;
