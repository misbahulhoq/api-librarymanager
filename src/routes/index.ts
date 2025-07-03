import express, { Router, Express } from "express";
import booksRouter from "./book.route";

export const routes = (app: Express) => {
  app.use("/api/books", booksRouter);
};
