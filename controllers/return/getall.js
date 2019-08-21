const Return = require("../../models/return/index");

const allReturns = async (req, res) => {
  try {
    const salesReturn = await Return.find().exec();
    if (salesReturn) {
      res.status(200).send({
        status: true,
        message: "Following are the sales returns stored in database",
        data: salesReturn
      });
    } else if (!salesReturn) {
      res.status(404).send({
        status: false,
        message: "No returns order found"
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
  allReturns
};
