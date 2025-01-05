import express from "express";
import { addRdv, listRdvs } from "../controllers/rdvController.js";

const router = express.Router();

router.post("/add", addRdv);

router.get("/list", listRdvs);

export default router;
