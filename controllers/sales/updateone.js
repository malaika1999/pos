const Sales = require('../../models/sales/index')

const updateSalesOrder = async (req, res) => {
  try {
    let updatedSalesOrder = await Sales.findOneAndUpdate(
      { _id: req.params.salesId },
      {
        storeId : req.body.storeId,
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
            }
    ).exec();
    if(!req.body.ntn || !req.body.gstNo || !req.body.billNo){
      return res.status(400).send({
          status: false,
          message: "Its mandatory to fill all required fields"
        });
  }
    return res.status(200).send({
      status: true,
      message: "Sales Order updated successfully",
      data: updatedSalesOrder
    });
  } catch (error) {
      return res.status(500).send({
        status: false,
        message: error.message
      });
    }
};
module.exports = {
  updateSalesOrder
};
