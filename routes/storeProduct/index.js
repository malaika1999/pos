const express = require("express");
const router = express.Router();

const createController = require("../../controllers/storeProduct/create");
const getAllController = require("../../controllers/storeProduct/getall");
const getOneController = require("../../controllers/storeProduct/getone");
const updateOneController = require("../../controllers/storeProduct/updateone");
const deleteOneController = require("../../controllers/storeProduct/deleteone");
const addStockController = require("../../controllers/storeProduct/addStock");
const updateStockController = require("../../controllers/storeProduct/updateStock");

router.post("/create",isLoggedIn, createController.createStoreProduct);
router.get("/getall/",isLoggedIn, getAllController.allStoreProducts);
router.get("/getone/:spId",isLoggedIn, getOneController.oneStoreProduct);
router.put("/update/:spId",isLoggedIn, updateOneController.updateStoreProduct);
router.delete("/delete/:spId",isLoggedIn, deleteOneController.deleteStoreProduct);
router.put("/addStock/",isLoggedIn, addStockController.addStock);
router.put("/updateStock/",isLoggedIn, updateStockController.updateStock);

module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}