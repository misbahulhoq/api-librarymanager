import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://librarymanager-kappa.vercel.app",
      "http://192.168.31.27:3000",
      "192.168.31.27:3000",
    ],
  })
);

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

app.get("/", (_req, res) => {
  res.send({
    message: "Open source API developed with node, express and typescript",
    developer: "Md Mezbah Uddin, a student of programming hero",
    purpose: "Learning purpose and assignment",
  });
});

app.get("/server-time", (_req, res) => {
  res.send({
    time: new Date(),
    formatted: new Date().toLocaleString(),
    zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
