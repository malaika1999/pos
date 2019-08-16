const Return = require("../../models/return/index");

const changeStatus = async (req, res) => {
  try {
    let changedStatus = await Return.findOneAndUpdate(
      { OrderNo: req.body.OrderNo },
      {
        status: req.body.status
      }
    ).exec();
    return res.status(200).send({
      data: changedStatus
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};

module.exports = {
  changeStatus
};
