import mongoose from "mongoose";
const test = "";

const bookSchema = new mongoose.Schema({
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

bookSchema.post("findOneAndUpdate", async function (doc) {
  if (doc.copies === 0) {
    doc.available = false;
    await doc.save();
  } else if (doc.copies > 0) {
    doc.available = true;
    await doc.save();
  }
});

export const Book = mongoose.model("Book", bookSchema);
