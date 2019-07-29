const Store = require("../../models/store/index.js");

const updateStore = async (req, res) => {
  try {
    let updatedStore = await Store.findOneAndUpdate(
      { _id: req.params.sId },
      {
        name: req.body.name,
        address: req.body.address,
        city:  req.body.city,
        country: req.body.country,
        postalCode: req.body.postalCode,
        image: req.body.image,
            }
    ).exec();
    if (
        !req.body.name ||
        !req.body.address ||
        !req.body.city ||
        !req.body.country    
         ) {
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
    }
    return res.status(200).send({
      status: true,
      message: "Store updated successfully",
      data: updatedStore
    });
  } catch (error) {
      return res.status(500).send({
        status: false,
        message: error.message
      });
    }
};
module.exports = {
  updateStore
};
