const Task = require('../models/tasks.model');
const Category = require('../models/categories.model');
const User = require('../models/users.model');

class TaskService {

    static async create(data) {
        try {
            const result = await Task.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const result = await Task.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAllTaskByUser(id) {
        try {
            const result = await Task.findAll({
                where: { user_id: id },
                attributes: {
                    exclude: [ 'userId',  'categoryId']
                },
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ['password', 'email', 'created_at']
                        }
                    },
                    {
                        model: Category,
                    }
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async completTask(id, state) {
        try {
            const result = await Task.update(state, {
                where: { id : id}
            })
            return result
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Task.destroy({
                where: { id : id }
            })
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = TaskService;