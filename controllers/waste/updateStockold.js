const Waste = require("../../models/waste/index");
const StoreProduct = require("../../models/storeProduct/index");
var _ = require("lodash");

let updateStock = async (req, res) => {
  let store = await StoreProduct.findOne({
    storeId: req.body.storeId
  })
    .lean()
    .exec();

  let productsInStore = store.products;
  let productsToBeWasted = req.body.products;

  res.send({
    productsInStore: productsInStore,
    productsToBeWasted: productsToBeWasted
  });

  for (let i = 0; i < productsToBeWasted.length; i++) {
    var productsAlreadyInStore = _.find(productsInStore, function(o) {
      return o.productName == productsToBeWasted[i].Product;
    });
    if (productsAlreadyInStore) {
      console.log("product found");
      var updatedStore = await StoreProduct.updateOne(
        {
          storeId: req.body.storeId,
          "products.productName": productsToBeWasted[i].Product
        },
        {
          $inc: {
            "products.$.stockAvailable": -productsToBeWasted[i].quantity
          }
        }
      ).exec();
      var updatedWasteStore = await Waste.updateOne(
        {
          storeId: req.body.storeId,
          "products.Product": productsToBeWasted[i].Product
        },
        {
          $inc: {
            "products.$.quantity": productsToBeWasted[i].quantity
          }
        }
      ).exec();
    } else {
      console.log("product not found");
      res.send({
        message: "Product does not exist in the inventory of the store"
      });
    }
  }
};

module.exports = {
  updateStock
};
