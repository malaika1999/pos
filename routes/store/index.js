const express = require("express");
const router = express.Router();

const createController = require("../../controllers/store/create");
const getAllController = require("../../controllers/store/getall");
const getOneController = require("../../controllers/store/getone");
const updateOneController = require("../../controllers/store/updateone");
const deleteOneController = require("../../controllers/store/deleteone");

router.post("/create",isLoggedIn, createController.createStore);
router.get("/getall/",isLoggedIn, getAllController.allStores);
router.get("/getone/:sId",isLoggedIn, getOneController.oneStore);
router.put("/update/:sId",isLoggedIn, updateOneController.updateStore);
router.delete("/delete/:sId",isLoggedIn, deleteOneController.deleteStore);

module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}