import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import rdvRoutes from "./routes/rdvRoutes.js";
import ContactRoutes from "./routes/ContactRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// app.use(cookieParser());

const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGO_URI;

app.use("/api/rdv", rdvRoutes);
app.use("/api/contact", ContactRoutes);

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`API is running on port ${port}`);
    });
  })
  .catch((error) =>
    console.error("Error connecting to MongoDB:", error.message)
  );

export default app;
