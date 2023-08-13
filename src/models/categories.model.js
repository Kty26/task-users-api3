const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Category = db.define('categories', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    }
},{
    timestamps: false,
})

module.exports = Category;