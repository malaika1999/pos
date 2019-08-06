const StoreProduct = require("../../models/storeProduct/index");
var _ = require("lodash");

let addStock = async (req, res) => {
  try {
    let addedStock = await StoreProduct.findOne({
      storeId: req.body.storeId
    })
      .lean()
      .exec();
    let productsInStore = addedStock.products;
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
              "products.$.stockAvailable": productsToBeStored[i].quantity
            }
          }
        ).exec();
      } else if (productsAlreadyInStore == undefined) {
        console.log("product no." + [i + 1] + "not found");
        let newProduct = {
          productName: productsToBeStored[i].productName,
          stockAvailable: productsToBeStored[i].quantity,
          soldQty: 0
        };
        StoreProduct.findOneAndUpdate(
          {
            storeId: req.body.storeId
          },
          { $push: { products: newProduct } }
        ).exec();
        console.log(newProduct);
      }
    }
    return res.send({
      status: true,
      productsInStore: productsInStore
    });
  } catch (error) {
    return res.send({
      status: false,
      message: error.message
    });
  }
};

module.exports = {
  addStock
};
