import express, { Request, Response } from "express";
import Borrow from "../models/borrow";
import { Book } from "../models/book";

const borrowRouter = express.Router();

borrowRouter.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  let b = new Borrow(req.body);
  const book = await Book.findById(req.body.bookId);
  if (!book) return res.status(400).send({ message: "Book not found" });
  if (book.copies < req.body.quantities)
    return res.status(400).send({ message: "Not enough copies" });
  book.copies -= req.body.quantities;
  await book.save();
  b = await b.save();
  res.send(b);
});
borrowRouter.get("/", async (req, res) => {
  const borrows = await Borrow.find();
  res.send(borrows);
});

export default borrowRouter;

const test = async (req: Request, res: Response) => {
  console.log(req.body);
  let b = new Borrow(req.body);
  const book = await Book.findById(req.body.bookId);
  if (!book) return res.status(400).send({ message: "Book not found" });
  if (book.copies < req.body.quantities)
    return res.status(400).send({ message: "Not enough copies" });
  book.copies -= req.body.quantities;
  await book.save();
  b = await b.save();
  res.send(b);
};
