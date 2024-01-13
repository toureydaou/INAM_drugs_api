const { Op } = require("sequelize");
const Drugs = require("../models/drugs");

const getAllDrugs = async (req, res) => {
  try {
    await Drugs.findAll({
      where: {
        name: {
          [Op.substring]: req.query.name ? req.query.name.toUpperCase() : "",
        },
      },
      order: [["name", "ASC"]],
    }).then((data) => {
      if (data != null) {
        res.status(200).json({ drugs: data });
      } else {
        res.status(404).json({ error: "No drug found !" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getDrugById = async (req, res) => {
  try {
    await Drugs.findByPk(req.params.id).then((data) => {
      if (data != null) {
        res.status(200).json({ drug: data });
      } else {
        res.status(404).json({ error: "No drug found !" });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getDrugsAllTherapy = async (req, res) => {
  try {
    await Drugs.findAll({
      attributes: ["therapy"],
      order: [["therapy", "ASC"]],
    }).then((data) => {
      if (data != null) {
        const therapies = JSON.stringify(data);

        const listTherapies = JSON.parse(therapies);

        const setTherapies = new Set(listTherapies.map(JSON.stringify));

        // Convertir l'ensemble en tableau
        const newlistTherapies = Array.from(setTherapies).map(JSON.parse);

        res.status(200).json({ therapies: newlistTherapies });
      } else {
        res.status(404).json({ error: "Ressource not found" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurs" });
  }
};

const getDrugsByTherapy = async (req, res) => {
  try {
    await Drugs.findAll({
      where: {
        therapy: {
          [Op.eq]: req.query.therapy,
        },
      },
      order: [["name", "ASC"]],
    }).then((data) => {
      res.status(200).json({ drugs: data });
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurs" });
  }
};

module.exports = {
  getAllDrugs: getAllDrugs,
  getDrugById: getDrugById,
  getDrugsAllTherapy: getDrugsAllTherapy,
  getDrugsByTherapy: getDrugsByTherapy,
};
