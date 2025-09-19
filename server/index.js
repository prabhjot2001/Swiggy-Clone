import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is UP and RUNNING on port: ${PORT}`);
});

app.get("/", (req, res)=>{
    res.send("Test route")
})