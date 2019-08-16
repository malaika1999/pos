const Sales = require("../../models/sales/index");

const createsalesOrder = async (req, res) => {
  try {
    let salesOrder = new Sales({
      storeId: req.body.storeId,
      ntn: req.body.ntn,
      gstNo: req.body.gstNo,
      date: req.body.date,
      billNo: req.body.billNo,
      Employee: req.body.Employee,
      Customer: req.body.Customer,
      posId: req.body.posId,
      products: req.body.products,
      netAmount: req.body.netAmount,
      receivedAmount: req.body.receivedAmount,
      balanceAmount: req.body.balanceAmount
    });
    if (!req.body.ntn || !req.body.gstNo || !req.body.billNo) {
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    }
    let createdSalesOrder = await salesOrder.save();
    res.status(201).send({
      status: true,
      message: "Sales Order created successfully",
      data: createdSalesOrder
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message
    });
  }
};

module.exports = {
  createsalesOrder
};
