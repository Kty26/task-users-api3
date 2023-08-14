const { Router } = require('express');
const { getUserTasks, createNewTask, userCompleteTask, deleteTask, getAllTask} = require('../controllers/tasks.controller');

const routes = Router();

routes.get('/task/', getAllTask);
routes.get('/task/:user', getUserTasks);

routes.post('/task', createNewTask);

routes.put('/task/:id', userCompleteTask)

routes.delete('/task/:id', deleteTask)

module.exports = routes;