const {
  getAllDrugs,
  getDrugById,
  getDrugsAllTherapy,
  getDrugsByTherapy,
} = require("../controllers/drugsController");

const express = require("express");

const router = express.Router();

router.get("/", getAllDrugs);
router.get("/therapies", getDrugsAllTherapy);
router.get("/therapy", getDrugsByTherapy);
router.get("/:id", getDrugById);

module.exports = {
  drugsRoutes: router,
};
