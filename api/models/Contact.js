import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
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
      match: /.+\@.+\..+/,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    newsletter: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
