const express = require("express");
const router = express.Router();

const createController = require("../../../controllers/product/departmentController/create");
const getAllController = require("../../../controllers/product/departmentController/getAll");
const getOneController = require("../../../controllers/product/departmentController/getOne");
const updateOneController = require("../../../controllers/product/departmentController/updateOne");
const deleteOneController = require("../../../controllers/product/departmentController/deleteOne");

router.post("/create", createController.createDepartment);
router.get("/getall/", getAllController.allDepartments);
router.get("/getone/:dId", getOneController.oneDepartment);
router.put("/update/:dId", updateOneController.updateDepartment);
router.delete("/delete/:dId", deleteOneController.deleteDepartment);

module.exports = router;
