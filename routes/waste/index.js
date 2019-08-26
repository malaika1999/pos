const express = require("express");
const router = express.Router();

const createController = require("../../controllers/waste/create");
const getAllController = require("../../controllers/waste/getall");
const getOneController = require("../../controllers/waste/getone");
const updateOneController = require("../../controllers/waste/updateone");
const deleteOneController = require("../../controllers/waste/deleteone");
const updateStockController = require("../../controllers/waste/updateStock");

router.post("/create",isLoggedIn, createController.addWasteStore);
router.get("/getall",isLoggedIn, getAllController.allWasteStores);
router.get("/getone/:wId",isLoggedIn, getOneController.oneWasteStore);
router.put("/update/:wId",isLoggedIn, updateOneController.updateWasteStore);
router.delete("/delete/:wId",isLoggedIn, deleteOneController.deleteWasteStore);
router.put("/updateStock/",isLoggedIn, updateStockController.updateStock);

module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}