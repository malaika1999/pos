const express = require("express");
const router = express.Router();

const createController = require("../../controllers/sales/create");
const getAllController = require("../../controllers/sales/getall");
const getOneController = require("../../controllers/sales/getone");
const updateOneController = require("../../controllers/sales/updateone");
const deleteOneController = require("../../controllers/sales/deleteone");

router.post("/create",isLoggedIn, createController.createsalesOrder);
router.get("/getall/",isLoggedIn, getAllController.allSalesOrders);
router.get("/getone/:salesId", isLoggedIn, getOneController.oneSalesOrder);
router.put("/update/:salesId",isLoggedIn, updateOneController.updateSalesOrder);
router.delete("/delete/:salesId",isLoggedIn, deleteOneController.deleteSalesOrder);

module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}