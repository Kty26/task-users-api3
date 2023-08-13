const { Router } = require('express');
const { getUserTasks, createNewTask, userCompleteTask, deleteTask, getAllTask} = require('../controllers/tasks.controller');

const routes = Router();

routes.get('/api/v2/task/', getAllTask);
routes.get('/api/v2/task/:user', getUserTasks);

routes.post('/api/v2/task', createNewTask);

routes.put('/api/v2/task/:id', userCompleteTask)

routes.delete('/api/v2/task/:id', deleteTask)

module.exports = routes;