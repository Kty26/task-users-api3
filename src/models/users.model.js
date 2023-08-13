const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const User = db.define('users', {
    userName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'user_name'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true,
        }
    }
},
{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
})

module.exports = User;