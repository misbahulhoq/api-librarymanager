"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = require("../models/book");
const booksRouter = express_1.default.Router();
booksRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_1.Book.find();
    res.send(books);
}));
booksRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let book = new book_1.Book(req.body);
    book = yield book.save();
    res.send(book);
}));
booksRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_1.Book.findById(req.params.id);
    res.send(book);
}));
booksRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("api is hitting", req.body, req.params.id);
    const book = yield book_1.Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.send(book);
}));
booksRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_1.Book.findByIdAndDelete(req.params.id);
    res.send(book);
}));
exports.default = booksRouter;
