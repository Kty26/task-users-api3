const Category = require('./categories.model');
const User = require('./users.model');
const Task = require('./tasks.model');

const initModels = () => {
   
    // Una tarea pertenece a un usuario y un usuario puede tener muchas tareas(1:M).
    Task.belongsTo(User, { foreignKey: 'userId' });
    User.hasMany(Task, { foreignKey: 'userId' });
    // Una tarea pertenece a una categoria y una categoria puede tener muchas tareas(1:M).
    Task.belongsTo(Category, { foreignKey: 'categoryId' });
    Category.hasMany(Task, { foreignKey: 'categoryId' }); 
}

module.exports = initModels;