const express = require('express');
const router = express.Router();

const createController = require('../../controllers/storeProduct/create');
const getAllController = require('../../controllers/storeProduct/getall');
const getOneController = require('../../controllers/storeProduct/getone');
const updateOneController = require('../../controllers/storeProduct/updateone');
const deleteOneController = require('../../controllers/storeProduct/deleteone');

router.post('/create', createController.createStoreProduct);
router.get('/getall/', getAllController.allStoreProducts);
router.get('/getone/:spId', getOneController.oneStoreProduct);
router.put('/update/:spId', updateOneController.updateStoreProduct);
router.delete('/delete/:spId', deleteOneController.deleteStoreProduct);

module.exports=router;