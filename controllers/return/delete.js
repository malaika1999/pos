const Return = require("../../models/return/index");

const deleteReturn = async (req, res) => {
  try {
    let deletedReturn = await Return.findByIdAndDelete({
      _id: req.params.rId
    }).exec();
    if (deletedReturn) {
      return res.status(200).send({
        status: true,
        message: "Return deleted successfully",
        data: deletedReturn
      });
    } else {
      return res.status(404).send({
        status: false,
        message: "Return not found with id" + req.params.rId
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
  deleteReturn
};
