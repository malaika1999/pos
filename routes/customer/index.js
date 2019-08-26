const express = require("express");
const router = express.Router();

const createController = require("../../controllers/customer/create");
const getAllController = require("../../controllers/customer/getall");
const getOneController = require("../../controllers/customer/getone");
const updateOneController = require("../../controllers/customer/updateone");
const deleteOneController = require("../../controllers/customer/deleteone");
const addPointsController = require("../../controllers/customer/addPoints");
const redeemPointsController = require("../../controllers/customer/redeemPoints");

router.post("/create",isLoggedIn,createController.createCustomer);
router.get("/getall/",isLoggedIn, getAllController.allCustomers);
router.get("/getone/:cusId",isLoggedIn, getOneController.oneCustomer);
router.put("/update/:cusId",isLoggedIn, updateOneController.updateCustomer);
router.delete("/delete/:cusId",isLoggedIn, deleteOneController.deleteCustomer);
router.put("/addPoints/",isLoggedIn, addPointsController.addPoints);
router.put("/redeem/",isLoggedIn, redeemPointsController.redeemPoints);

module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}
