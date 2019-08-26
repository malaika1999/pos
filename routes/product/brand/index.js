const express = require("express");
const router = express.Router();

const createController = require("../../../controllers/product/brandController/create");
const getAllController = require("../../../controllers/product/brandController/getAll");
const getOneController = require("../../../controllers/product/brandController/getOne");
const updateOneController = require("../../../controllers/product/brandController/updateOne");
const deleteOneController = require("../../../controllers/product/brandController/deleteOne");

router.post("/create",isLoggedIn, createController.createBrand);
router.get("/getall/",isLoggedIn, getAllController.allBrands);
router.get("/getone/:bId",isLoggedIn, getOneController.oneBrand);
router.put("/update/:bId",isLoggedIn, updateOneController.updateBrand);
router.delete("/delete/:bId",isLoggedIn, deleteOneController.deleteBrand);

module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}
