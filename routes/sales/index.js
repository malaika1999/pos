const express = require("express");
const router = express.Router();

const createController = require("../../controllers/sales/create");
const getAllController = require("../../controllers/sales/getall");
const getOneController = require("../../controllers/sales/getone");
const updateOneController = require("../../controllers/sales/updateone");
const deleteOneController = require("../../controllers/sales/deleteone");

router.post("/create", createController.createsalesOrder);
router.get("/getall/", getAllController.allSalesOrders);
router.get("/getone/:salesId", getOneController.oneSalesOrder);
router.put("/update/:salesId", updateOneController.updateSalesOrder);
router.delete("/delete/:salesId", deleteOneController.deleteSalesOrder);

module.exports = router;
