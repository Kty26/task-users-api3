const User = require('../models/users.model');

class UserService {
    static async createUser(newUser) {
        try {
            const result = await User.create(newUser, {
               
            });
            console.log(result)
            return result
        } catch (error) {
            throw error;
        }
    }

    static async getUsers() {
        try {
            const result = await User.findAll({
                attributes: ['id', 'userName', 'email', 'created_at']
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, newData) {
        try {
            const result = await User.update(newData, {
                where: { id: id },
            })
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await User.destroy({
                where: { id: id }
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async getUser(id) {
        try {
            const result = await User.findByPk(id, {
                attributes: {
                    exclude: ['password']
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService