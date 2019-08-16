const Return = require("../../models/return/index");

const createReturn = async (req, res) => {
  try {
    let salesReturn = new Return({
      OrderNo: req.body.OrderNo,
      status: req.body.status,
      products: req.body.products,
      Employee: req.body.Employee
    });
    if (
      !req.body.OrderNo ||
      !req.body.Employee ||
      !req.body.products ||
      !req.body.status
    ) {
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    }
    let createdReturn = await salesReturn.save();
    res.status(201).send({
      status: true,
      message: "Return created successfully",
      data: createdReturn
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  createReturn
};
