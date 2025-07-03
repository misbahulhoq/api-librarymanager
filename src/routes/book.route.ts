import e from "express";
import { Book } from "../models/book";

const booksRouter = e.Router();

booksRouter.get("/", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

booksRouter.post("/", async (req, res) => {
  let book = new Book(req.body);
  book = await book.save();
  res.send(book);
});

booksRouter.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.send(book);
});

booksRouter.put("/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body);
  res.send(book);
});

booksRouter.delete("/:id", async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  res.send(book);
});

export default booksRouter;
