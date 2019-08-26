const express = require("express");
const router = express.Router();

const createController = require("../../../controllers/product/departmentController/create");
const getAllController = require("../../../controllers/product/departmentController/getAll");
const getOneController = require("../../../controllers/product/departmentController/getOne");
const updateOneController = require("../../../controllers/product/departmentController/updateOne");
const deleteOneController = require("../../../controllers/product/departmentController/deleteOne");

router.post("/create",isLoggedIn, createController.createDepartment);
router.get("/getall/",isLoggedIn, getAllController.allDepartments);
router.get("/getone/:dId",isLoggedIn, getOneController.oneDepartment);
router.put("/update/:dId",isLoggedIn, updateOneController.updateDepartment);
router.delete("/delete/:dId",isLoggedIn, deleteOneController.deleteDepartment);

module.exports = router;
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.status(400).json({
        'message': 'access denied'
    });
}
