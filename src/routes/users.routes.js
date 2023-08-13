const { getAllUsers, createNewUser, deleteUser, updateUser, getOneUser } = require('../controllers/users.controles');
const { Router } = require('express');

const routes = Router();

// create new user
routes.post('/api/v2/users', createNewUser);

// Obtener todos los usuarios.
routes.get('/api/v2/users', getAllUsers);

routes.get('/api/v2/users/:id', getOneUser)

// update user
routes.put('/api/v2/users/:id', updateUser);

// Delete user
routes.delete('/api/v2/users/:id', deleteUser);

module.exports = routes;