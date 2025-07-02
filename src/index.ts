import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello From Typescript");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
