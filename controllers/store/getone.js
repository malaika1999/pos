const Store = require("../../models/store/index.js");

const oneStore = async (req, res) => {
  try {
    var store = await Store.findById({ _id: req.params.sId }).exec();
    if (!store) {
      return res.send({ message: "Store not found" });
    } else if (store) {
      return res.send({ message: "Store found", data: store });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneStore
};
