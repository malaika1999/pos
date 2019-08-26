const express = require("express");
const router = express.Router();

const createController = require("../../../controllers/product/productController/create");
const getAllController = require("../../../controllers/product/productController/getAll");
const getOneController = require("../../../controllers/product/productController/getOne");
const updateOneController = require("../../../controllers/product/productController/updateOne");
const deleteOneController = require("../../../controllers/product/productController/deleteOne");

router.post("/create",isLoggedIn, createController.createProduct);
router.get("/getall/",isLoggedIn, getAllController.allProducts);
router.get("/getone/:pId",isLoggedIn, getOneController.oneProduct);
router.put("/update/:pId",isLoggedIn, updateOneController.updateProduct);
router.delete("/delete/:pId",isLoggedIn, deleteOneController.deleteProduct);

module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}