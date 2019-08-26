const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wasteSchema = mongoose.Schema({
  returnId: {
    type: Schema.Types.ObjectId,
    ref: "return"
  },
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "store",
    unique:true
  },
  products: [
    {
      Product: {
        type: Schema.Types.ObjectId,
        ref: "product"
      },
      quantity: {
        type: Number
      },
      comments: {
        type: String
      }
    }
  ]
});
mongoose.model("waste", wasteSchema);
module.exports = mongoose.model("waste");
