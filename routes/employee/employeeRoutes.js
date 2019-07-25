const express = require('express');
const router = express.Router();

const createController = require('../../controllers/employee/create');
const getAllController = require('../../controllers/employee/getall');
const getOneController = require('../../controllers/employee/getone');
const updateOneController = require('../../controllers/employee/updateone');
const deleteOneController = require('../../controllers/employee/deleteone');

router.post('/create', createController.createEmployee);
router.get('/getall/', getAllController.allEmployees);
router.get('/getone/:eId', getOneController.oneEmployee);
router.put('/update/:eId', updateOneController.updateEmployee);
router.delete('/delete/:eId', deleteOneController.deleteEmployee);

module.exports=router;