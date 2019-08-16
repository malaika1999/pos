const StoreProduct = require("../../models/storeProduct/index");
const Return = require("../../models/return/index");
var _ = require("lodash");

let updateInventory = async (req, res) => {
  try {
    let returnOrder = await Return.findOne({
      OrderNo: req.body.OrderNo
    })
      .lean()
      .exec();
    let store = await StoreProduct.findOne({
      storeId: req.body.storeId
    })
      .lean()
      .exec();

    let productsInStore = store.products;
    let productsToBeReturned = returnOrder.products;
    let updatedStore;
    console.log("%%%%productsInStore%%%%");
    console.log(productsInStore);
    console.log("%%%%productsToBeReturned%%%%");
    console.log(productsToBeReturned);
    console.log("%%%%%%%%%%%%");

    for (let i = 0; i < productsToBeReturned.length; i++) {
      let ProductAlreadyInStore = productsInStore.find(e => {
        return (
          e.productName.toString() == productsToBeReturned[i].Product.toString()
        );
      });
      if (ProductAlreadyInStore) {
        console.log("product found");
        updatedStore = await StoreProduct.updateOne(
          {
            storeId: req.body.storeId,
            "products.productName": productsToBeReturned[i].Product
          },
          {
            $inc: {
              "products.$.stockAvailable": productsToBeReturned[i].qty
            }
          }
        ).exec();
      } else {
        console.log("product not found");
      }
    }
    res.status(200).send({
      status: true,
      productsInStore: productsInStore
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};

module.exports = {
  updateInventory
};
