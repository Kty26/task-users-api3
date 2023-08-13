const CategoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    try {
        const data = req.body;
        const response = await CategoryService.create(data)
        res.status(201).json(response)
    } catch (error) {
        res.json(error)
    }
}

const getAllCategories = async (req, res) => {
    try {
        const response = await CategoryService.getAll();
        res.json(response);
    } catch (error) {
        res.json(error)
    }
}

const editCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        await CategoryService.edit(id, data)
        res.status(204).send('')
    } catch (error) {
        res.json(error)
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await CategoryService.delete(id)
        res.status(204).send('')
    } catch (error) {
        res.json(error);
    }
}


module.exports = {
    createCategory,
    getAllCategories,
    editCategory,
    deleteCategory
}