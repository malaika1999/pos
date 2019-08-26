const express = require("express");
const router = express.Router();

const createController = require("../../controllers/return/create");
const getAllController = require("../../controllers/return/getall");
const getOneController = require("../../controllers/return/getone");
const updateOneController = require("../../controllers/return/updateone");
const deleteOneController = require("../../controllers/return/delete");
const changeStatusController = require("../../controllers/return/changeStatus");
const updateInventoryController = require("../../controllers/return/updateInventory");

router.post("/create",isLoggedIn, createController.createReturn);
router.get("/getall/",isLoggedIn, getAllController.allReturns);
router.get("/getone/:rId",isLoggedIn, getOneController.oneReturnOrder);
router.put("/update/:rId",isLoggedIn, updateOneController.updateReturn);
router.delete("/delete/:rId",isLoggedIn, deleteOneController.deleteReturn);
router.put("/changeStatus/",isLoggedIn, changeStatusController.changeStatus);
router.put("/updateInventory/",isLoggedIn, updateInventoryController.updateInventory);

module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}
