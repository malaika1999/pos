const express = require('express');
const router = express.Router();

const createController = require('../../controllers/return/create');
const getAllController = require('../../controllers/return/getall');
const getOneController = require('../../controllers/return/getone');
const updateOneController = require('../../controllers/return/updateone');
const deleteOneController = require('../../controllers/return/delete');
const changeStatusController = require('../../controllers/return/changeStatus');
const updateInventoryController = require('../../controllers/return/updateInventory')

router.post('/create', createController.createReturn);
router.get('/getall/', getAllController.allReturns);
router.get('/getone/:rId', getOneController.oneReturnOrder);
router.put('/update/:rId', updateOneController.updateReturn);
router.delete('/delete/:rId', deleteOneController.deleteReturn);
router.put('/changeStatus/', changeStatusController.changeStatus);
router.put('/updateInventory/', updateInventoryController.updateInventory)


module.exports=router;