import Rdv from "../models/rdv.js";

export const addRdv = async (req, res) => {
  try {
    const newRdv = new Rdv(req.body);
    const savedRdv = await newRdv.save();
    res.status(201).json({
      message: "Rendez-vous ajouté avec succès",
      data: savedRdv,
    });
  } catch (error) {
    res.status(400).json({
      message: "Erreur lors de l’ajout du rendez-vous",
      error: error.message,
    });
  }
};

export const listRdvs = async (req, res) => {
  try {
    const rdvs = await Rdv.find();
    res.status(200).json({
      message: "Liste des rendez-vous récupérée avec succès",
      data: rdvs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des rendez-vous",
      error: error.message,
    });
  }
};
