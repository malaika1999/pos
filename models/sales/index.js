const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salesSchema = mongoose.Schema({
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "store"
  },
  ntn: {
    type: String,
    required: true
  },
  gstNo: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  billNo: {
    type: Number,
    required: true,
    unique: true
  },
  Employee: {
    type: Schema.Types.ObjectId,
    ref: "employee"
  },
  Customer: {
    type: Schema.Types.ObjectId,
    ref: "customer"
  },
  posId: {
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
      discount: {
        type: Number
      },
      gst: {
        type: Number
      },
      total: {
        type: Number
      },
      description: {
        type: String
      }
    }
  ],
  netAmount: {
    type: Number
  },
  receivedAmount: {
    type: Number
  },
  balanceAmount: {
    type: Number
  }
});

mongoose.model("sales", salesSchema);
module.exports = mongoose.model("sales");
