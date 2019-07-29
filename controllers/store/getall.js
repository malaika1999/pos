const Store = require("../../models/store/index.js");

const allStores = async (req, res) => {
  try {
    const store = await Store.find().exec();
    if (store) {
      res.status(200).send({
        status: true,
        message: "Following are the stores stored in database",
        data: store
      });
    } else if (!store) {
      res.status(404).send({
        status: false,
        message: "No stores found"
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  allStores
};
