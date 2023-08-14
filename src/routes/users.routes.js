const { getAllUsers, createNewUser, deleteUser, updateUser, getOneUser } = require('../controllers/users.controles');
const { Router } = require('express');

const routes = Router();

// create new user
routes.post('/users', createNewUser);

// Obtener todos los usuarios.
routes.get('/users', getAllUsers);

routes.get('/users/:id', getOneUser)

// update user
routes.put('/users/:id', updateUser);

// Delete user
routes.delete('/users/:id', deleteUser);

module.exports = routes;