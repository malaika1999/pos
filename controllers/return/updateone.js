const Return = require('../../models/return/index')

const updateReturn = async (req, res) => {
  try {
    let updatedReturn = await Return.findOneAndUpdate(
      { _id: req.params.rId },
      {
        OrderNo: req.body.OrderNo,
        status: req.body.status,
        products: req.body.products,
        Employee: req.body.Employee
            }
    ).exec();
    if (!req.body.OrderNo || !req.body.Employee || !req.body.products ) {
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    }
    return res.status(200).send({
      status: true,
      message: "Sales Return updated successfully",
      data: updatedReturn
    });
  } catch (error) {
      return res.status(500).send({
        status: false,
        message: error.message
      });
    }
};
module.exports = {
  updateReturn
};
