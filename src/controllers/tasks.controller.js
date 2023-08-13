const TaskService = require('../services/task.service');

const createNewTask = async (req, res) => {
    try {
        const newTask = req.body;
        const result = await TaskService.create(newTask);
        res.status(201).json(result);
    } catch (error) {
        res.json(error)
    }
}

const getAllTask = async (req, res) => {
    try {
        const response = await TaskService.getAll();
        res.json(response);
    } catch (error) {
        res.json(error)
    }
}

const getUserTasks = async (req, res) => {
    try {
        const { user } = req.params;
        const response = await TaskService.getAllTaskByUser(user);
        res.send(response);
    } catch (error) {
        res.json(error);
    }
}

const userCompleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const state = req.body;
        await TaskService.completTask(id, state);
        res.status(204).json({});
    } catch (error) {
        res.json(error);
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await TaskService.delete(id);
        res.status(200).json(response)
    } catch (error) {
        res.json(error);
    }
}

module.exports = {
    createNewTask,
    getUserTasks,
    userCompleteTask,
    deleteTask,
    getAllTask
}