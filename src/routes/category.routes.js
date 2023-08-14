const { Router } = require('express');
const {
    createCategory,
    getAllCategories,
    editCategory,
    deleteCategory,
} = require('../controllers/categories.controller')


const routes = Router();

routes.get('/categories', getAllCategories);

routes.post('/categories', createCategory);

routes.put('/categories/:id', editCategory);

routes.delete('/categories/:id', deleteCategory);

module.exports = routes;