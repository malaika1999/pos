const express = require('express');
const router = express.Router();

const createController = require('../../../controllers/product/brandController/create');
const getAllController = require('../../../controllers/product/brandController/getAll');
const getOneController = require('../../../controllers/product/brandController/getOne');
const updateOneController = require('../../../controllers/product/brandController/updateOne');
const deleteOneController = require('../../../controllers/product/brandController/deleteOne');

router.post('/create', createController.createBrand);
router.get('/getall/', getAllController.allBrands);
router.get('/getone/:bId', getOneController.oneBrand);
router.put('/update/:bId', updateOneController.updateBrand);
router.delete('/delete/:bId', deleteOneController.deleteBrand);

module.exports=router;