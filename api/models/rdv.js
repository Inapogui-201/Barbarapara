import mongoose from "mongoose";

const rdvSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/, // Validation d'email
  },
  phone: {
    type: String,
    required: true,
  },
  streetNumber: {
    type: String,
  },
  streetAddress: {
    type: String,
  },
  additionalAddress: {
    type: String,
  },
  city: {
    type: String,
  },
  region: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    enum: ["30", "60", "90", "120"],
    default: "30",
  },
  serviceType: {
    type: String,
    enum: ["TCC", "TERV", "EMDR"],
    required: true,
  },
  previousVisit: {
    type: String,
    enum: ["oui", "non"],
  },
  notes: {
    type: String,
  },
});

const Rdv = mongoose.model("Rdv", rdvSchema);

export default Rdv;
