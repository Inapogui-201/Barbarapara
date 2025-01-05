import express from "express";
import { addContact, getContacts } from "../controllers/ContactController.js";

const router = express.Router();

router.post("/add", addContact);

router.get("/get", getContacts);

export default router;
