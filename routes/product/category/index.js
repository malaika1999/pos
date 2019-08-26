const express = require("express");
const router = express.Router();

const createController = require("../../../controllers/product/categoryController/create");
const getAllController = require("../../../controllers/product/categoryController/getAll");
const getOneController = require("../../../controllers/product/categoryController/getOne");
const updateOneController = require("../../../controllers/product/categoryController/updateOne");
const deleteOneController = require("../../../controllers/product/categoryController/deleteOne");

router.post("/create",isLoggedIn, createController.createCategory);
router.get("/getall/",isLoggedIn, getAllController.allCategories);
router.get("/getone/:cId",isLoggedIn, getOneController.oneCategory);
router.put("/update/:cId",isLoggedIn, updateOneController.updateCategory);
router.delete("/delete/:cId",isLoggedIn, deleteOneController.deleteCategory);

module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}
