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
    default: 1,
  },
  dueDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const borrow = mongoose.model("Borrow", borrowSchema);
export default borrow;
