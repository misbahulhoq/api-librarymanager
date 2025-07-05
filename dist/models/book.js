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
exports.Book = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    copies: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
});
bookSchema.post("findOneAndUpdate", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        if (doc.copies === 0) {
            doc.available = false;
            yield doc.save();
        }
        else if (doc.copies > 0) {
            doc.available = true;
            yield doc.save();
        }
    });
});
bookSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.copies === 0) {
            this.available = false;
        }
        else if (this.copies > 0) {
            this.available = true;
        }
        next();
    });
});
exports.Book = mongoose_1.default.model("Book", bookSchema);
