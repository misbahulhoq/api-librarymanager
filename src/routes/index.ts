import { Express } from "express";
import booksRouter from "./book.route";
import borrowRouter from "./borrow.route";

export const routes = (app: Express) => {
  app.use("/api/books", booksRouter);
  app.use("/api/borrow", borrowRouter);
};
