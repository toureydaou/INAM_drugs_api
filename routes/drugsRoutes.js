const { getAllDrugs } = require("../controllers/drugsController");

const express = require("express");

const router = express.Router();

router.get("/", getAllDrugs);

module.exports = {
  drugsRoutes: router,
};
