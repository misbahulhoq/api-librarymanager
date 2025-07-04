import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Book",
  },
  quantities: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const borrow = mongoose.model("Borrow", borrowSchema);
export default borrow;
