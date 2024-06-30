const express = require("express");
const {
  getAllContacts,
  createContact,
} = require("../controllers/contactController");

const router = express.Router();

router.get("/", getAllContacts);
router.post("/", createContact);

module.exports = router;
