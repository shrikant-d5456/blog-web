const express = require("express");
const {
  getAboutData,
  createAboutData,
} = require("../controllers/aboutController");

const router = express.Router();

router.get("/", getAboutData);
router.post("/", createAboutData);

module.exports = router;
