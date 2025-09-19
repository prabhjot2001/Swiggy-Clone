import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/DB.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB(process.env.MONGODB_URI);
  console.log(`Server is UP and RUNNING on port: ${PORT}`);
});

