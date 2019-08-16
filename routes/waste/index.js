const express = require('express');
const router = express.Router();

const createController = require('../../controllers/waste/create')
const getAllController = require('../../controllers/waste/getall')
const getOneController = require('../../controllers/waste/getone')
const updateOneController = require('../../controllers/waste/updateone')
const deleteOneController = require('../../controllers/waste/deleteone')
const updateStockController = require('../../controllers/waste/updateStock')

router.post('/create', createController.addWasteStore)
router.get('/getall', getAllController.allWasteStores)
router.get('/getone/:wId', getOneController.oneWasteStore)
router.put('/update/:wId', updateOneController.updateWasteStore)
router.delete('/delete/:wId', deleteOneController.deleteWasteStore)
router.put('/updateStock/', updateStockController.updateStock)

module.exports = router;