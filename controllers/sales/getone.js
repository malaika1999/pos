const Sales = require('../../models/sales/index')

const oneSalesOrder = async (req, res) => {
  try {
    var salesOrder = await Sales.findById({ _id: req.params.salesId }).exec();
    if (!salesOrder) {
      return res.send({ message: "Sales Order not found" });
    } else if (salesOrder) {
      return res.send({ message: "Sales Order found", data: salesOrder });
    }
  } catch (error) {
    return res.send({ message: error.message });
  }
};
module.exports = {
  oneSalesOrder
};
