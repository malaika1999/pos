const express = require('express');
const router = express.Router();

const createController = require('../../controllers/store/create');
const getAllController = require('../../controllers/store/getall');
const getOneController = require('../../controllers/store/getone');
const updateOneController = require('../../controllers/store/updateone');
const deleteOneController = require('../../controllers/store/deleteone');

router.post('/create', createController.createStore);
router.get('/getall/', getAllController.allStores);
router.get('/getone/:sId', getOneController.oneStore);
router.put('/update/:sId', updateOneController.updateStore);
router.delete('/delete/:sId', deleteOneController.deleteStore);

module.exports=router;