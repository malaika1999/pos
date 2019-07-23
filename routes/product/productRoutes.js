const express = require('express');
const router = express.Router();

const createController = require('../../controllers/product/productController/create');
const getAllController = require('../../controllers/product/productController/getAll');
const getOneController = require('../../controllers/product/productController/getOne');
const updateOneController = require('../../controllers/product/productController/updateOne');
const deleteOneController = require('../../controllers/product/productController/deleteOne');

router.post('/create', createController.createProduct);
router.get('/getall/', getAllController.allProducts);
router.get('/getone/:pId', getOneController.oneProduct);
router.put('/update/:pId', updateOneController.updateProduct);
router.delete('/delete/:pId', deleteOneController.deleteProduct);

module.exports=router;