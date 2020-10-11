const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    date: {
      type: Date,
      default: Date.now
    },
    value: {
      type: Number,
      required: "Enter an amount"
    }
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

//export Transaction module
module.exports = Transaction;
