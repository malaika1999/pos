const mongoose = require("mongoose");
const Store = require("../../models/store/index.js");

const deleteStore = async (req, res) => {
  try {
    let deletedStore = await Store.findByIdAndDelete({
      _id: req.params.sId
    }).exec();
    if (deletedStore) {
      return res.send({
        status: true,
        message: "Store deleted successfully",
        data: deletedStore
      });
    } else {
      return res.send({
        status: false,
        message: "Store not found with id" + req.params.sId
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};

module.exports = {
  deleteStore
};
