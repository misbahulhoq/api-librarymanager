"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const borrowSchema = new mongoose_1.default.Schema({
    bookId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Book",
    },
    quantities: {
        type: Number,
        required: true,
        default: 1,
    },
    dueDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
const borrow = mongoose_1.default.model("Borrow", borrowSchema);
exports.default = borrow;
