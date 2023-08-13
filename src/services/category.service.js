const Category = require('../models/categories.model');


class CategoryService {

    static async create(data) {
        try {
            const result = await Category.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const result = await Category.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async edit(id, data) {
        try {
            const result = await Category.update(data, {
                where: {id: id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Category.destroy({
                where: {id: id}
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CategoryService;