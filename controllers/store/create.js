const Store= require("../../models/store/index.js");

const createStore = async (req, res) => {
  try {
    let store = new Store({
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      postalCode: req.body.postalCode,
      image: req.body.image
    });
    if (
      !req.body.name ||
      !req.body.address ||
      !req.body.city ||
      !req.body.country 
    )
      return res.status(400).send({
        status: false,
        message: "Its mandatory to fill all required fields"
      });
      let createdStore = await store.save();
      res.status(201).send({
        status: true,
        message: "Store created successfully",
        data: createdStore
      });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message
    });
  }
};
module.exports = {
  createStore
};
