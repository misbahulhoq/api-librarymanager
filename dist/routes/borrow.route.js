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
const borrow_1 = __importDefault(require("../models/borrow"));
const book_1 = require("../models/book");
const borrowRouter = express_1.default.Router();
borrowRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let b = new borrow_1.default(req.body);
    const book = yield book_1.Book.findById(req.body.bookId);
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
    yield book.save();
    b = yield b.save();
    res.send(b);
}));
borrowRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const borrows = yield borrow_1.default.aggregate([
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
}));
exports.default = borrowRouter;
