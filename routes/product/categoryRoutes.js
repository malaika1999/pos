const express = require('express');
const router = express.Router();

const createController = require('../../controllers/product/categoryController/create');
const getAllController = require('../../controllers/product/categoryController/getAll');
const getOneController = require('../../controllers/product/categoryController/getOne');
const updateOneController = require('../../controllers/product/categoryController/updateOne');
const deleteOneController = require('../../controllers/product/categoryController/deleteOne');

router.post('/create', createController.createCategory);
router.get('/getall/', getAllController.allCategories);
router.get('/getone/:cId', getOneController.oneCategory);
router.put('/update/:cId', updateOneController.updateCategory);
router.delete('/delete/:cId', deleteOneController.deleteCategory);

module.exports=router;