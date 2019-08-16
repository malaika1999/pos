const Sales = require('../../models/sales/index')

const deleteSalesOrder = async (req, res) => {
  try {
    let deletedSalesOrder = await Sales.findByIdAndDelete({
      _id: req.params.salesId
    }).exec();
    if (deletedSalesOrder) {
      return res.send({
        status: true,
        message: "Sales Order deleted successfully",
        data: deletedSalesOrder
      });
    } else {
      return res.send({
        status: false,
        message: "Sales Order not found with id" + req.params.salesId
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
  deleteSalesOrder
};
