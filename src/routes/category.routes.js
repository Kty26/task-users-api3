const { Router } = require('express');
const {
    createCategory,
    getAllCategories,
    editCategory,
    deleteCategory,
} = require('../controllers/categories.controller')


const routes = Router();

routes.get('/api/v2/categories', getAllCategories);

routes.post('/api/v2/categories', createCategory);

routes.put('/api/v2/categories/:id', editCategory);

routes.delete('/api/v2/categories/:id', deleteCategory);

module.exports = routes;