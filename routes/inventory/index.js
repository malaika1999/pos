const express = require('express');
const router = express.Router();

const createController = require('../../controllers/inventory/create');
const getAllController = require('../../controllers/inventory/getall');
const getOneController = require('../../controllers/inventory/getone');
const updateOneController = require('../../controllers/inventory/updateone');
const deleteOneController = require('../../controllers/inventory/deleteone');

router.post('/create', createController.createInventory);
router.get('/getall/', getAllController.allInventory);
router.get('/getone/:inId', getOneController.oneInventory);
router.put('/update/:inId', updateOneController.updateInventory);
router.delete('/delete/:inId', deleteOneController.deleteInventory);

module.exports=router;