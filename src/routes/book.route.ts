import e from "express";
import { Book } from "../models/book";

const booksRouter = e.Router();

booksRouter.get("/", async (req, res) => {
  console.log("GET /api/books");
  const books = await Book.find();
  res.send(books);
});

booksRouter.post("/", async (req, res) => {
  let book = new Book(req.body);
  book = await book.save();
  res.send(book);
});

export default booksRouter;
