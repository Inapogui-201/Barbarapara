import Contact from "../models/Contact.js";

export const addContact = async (req, res) => {
  const { firstName, lastName, email, phone, message, newsletter } = req.body;

  const newContact = new Contact({
    firstName,
    lastName,
    email,
    phone,
    message,
    newsletter,
  });

  try {
    const savedContact = await newContact.save();
    res
      .status(201)
      .json({ message: "Contact ajouté avec succès", data: savedContact });
  } catch (error) {
    console.error("Erreur lors de l’ajout du contact:", error);
    res
      .status(400)
      .json({ message: "Erreur lors de l’ajout du contact", error });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Erreur lors de la récupération des contacts:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des contacts", error });
  }
};
