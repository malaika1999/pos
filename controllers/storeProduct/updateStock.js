const StoreProduct = require("../../models/storeProduct/index");
var _ = require("lodash");

let updateStock = async (req, res) => {
  try {
    let updatedStock = await StoreProduct.findOne({
      storeId: req.body.storeId
    })
      .lean()
      .exec();
    let productsInStore = updatedStock.products;
    let productsToBeStored = req.body.products;
    let updatedStore;
    for (let i = 0; i < productsToBeStored.length; i++) {
      var productsAlreadyInStore = _.find(productsInStore, function(o) {
        return o.productName == productsToBeStored[i].productName;
      });
      if (productsAlreadyInStore) {
        console.log("product no." + [i + 1] + "found");
        console.log(productsAlreadyInStore);
        updatedStore = await StoreProduct.updateOne(
          {
            storeId: req.body.storeId,
            "products.productName": productsToBeStored[i].productName
          },
          {
            $inc: {
              "products.$.stockAvailable": -1*productsToBeStored[i].quantity,
              "products.$.soldQty": productsToBeStored[i].quantity
            }
          }
        ).exec();
      } else if (productsAlreadyInStore == undefined) {
        console.log("product no." + [i + 1] + "not found");
         res.send({
          status: true,
          message: "product not found in store"
        });
      }
    }
    return res.send({
      status: true,
      productsInStore: productsInStore
    })
  } catch (error) {
    return res.send({
      status: false,
      message: error.message
    });
  }
 };

module.exports = {
  updateStock
};
