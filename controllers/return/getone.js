const Return = require("../../models/return/index");

const oneReturnOrder = async (req, res) => {
  try {
    var returnOrder = await Return.findById({ _id: req.params.rId }).exec();
    if (!returnOrder) {
      return res.status(404).send({ message: "Return Order not found" });
    } else if (returnOrder) {
      return res
        .status(200)
        .send({ message: "Return Order found", data: returnOrder });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
module.exports = {
  oneReturnOrder
};
