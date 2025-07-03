import express from "express";
import { routes } from "./routes";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL || "mongodb://localhost:27017/playground")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

routes(app);
app.get("/", (req, res) => {
  res.send("Hello From Typescript");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
