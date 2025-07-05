import express, { Request, Response } from "express";
import Borrow from "../models/borrow";
import { Book } from "../models/book";
const borrowRouter = express.Router();

borrowRouter.post("/", async (req: Request, res: Response) => {
  let b = new Borrow(req.body);
  const book = await Book.findById(req.body.bookId);
  if (!book) {
    res.status(404).send({ message: "Book not found" });
    return;
  }
  if (book.copies < req.body.quantities) {
    res.status(400).send({ message: "Not enough copies" });
    return;
  }
  console.log("book copies before subtraction", book.copies);
  book.copies -= req.body.quantities;
  console.log("book copies after subtraction", book.copies);
  if (book.copies === 0) {
    book.available = false;
  }
  await book.save();
  b = await b.save();
  res.send(b);
});

borrowRouter.get("/", async (req, res) => {
  const borrows = await Borrow.aggregate([
    {
      $group: { _id: "$bookId", borrowed: { $sum: "$quantities" } },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "book",
      },
    },
    {
      $unwind: "$book",
    },
  ]);
  res.send(borrows);
});

export default borrowRouter;
