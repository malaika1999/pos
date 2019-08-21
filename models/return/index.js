const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const returnSchema = mongoose.Schema({
  OrderNo: {
    type: Schema.Types.ObjectId,
    ref: "salesOrder"
  },
  status: {
    type: String
  },
  products: [
    {
      Product: {
        type: Schema.Types.ObjectId,
        ref: "product"
      },
      qty: {
        type: Number
      },
      unitCost: {
        type: Number
      },
      reason: {
        type: String
      },
      description: {
        type: String
      }
    }
  ],
  Employee: {
    type: Schema.Types.ObjectId,
    ref: "employee"
  }
});

mongoose.model("return", returnSchema);
module.exports = mongoose.model("return");
