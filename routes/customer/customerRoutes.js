const express = require('express');
const router = express.Router();

const createController = require('../../controllers/customer/create');
const getAllController = require('../../controllers/customer/getall');
const getOneController = require('../../controllers/customer/getone');
const updateOneController = require('../../controllers/customer/updateone');
const deleteOneController = require('../../controllers/customer/deleteone');

router.post('/create', createController.createCustomer);
router.get('/getall/', getAllController.allCustomers);
router.get('/getone/:cusId', getOneController.oneCustomer);
router.put('/update/:cusId', updateOneController.updateCustomer);
router.delete('/delete/:cusId', deleteOneController.deleteCustomer);

module.exports=router;