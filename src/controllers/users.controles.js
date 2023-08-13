const UserService = require("../services/users.service");


const createNewUser = async (req, res) => {
    try {
        const user = req.body;
        const data = await UserService.createUser(user)
        res.json(data);
    }
    catch (error) {
        res.status(400).json(error)
    }
}

const getAllUsers = async (req, res) => {
    try {
        const data = await UserService.getUsers();
        res.status(200).json(data);
    } catch (error) {
        res.json(error);
    }
}

const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserService.getUser(id);
        res.json(user);
    } catch (error) {
        res.json(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const response = await UserService.update(id, data)
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}


const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const response  = await UserService.delete(id);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}


module.exports = {
    createNewUser,
    getAllUsers,
    updateUser,
    deleteUser,
    getOneUser
}