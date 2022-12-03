const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allownull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allownull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'normal'
    }, 
    country: {
        type: DataTypes.STRING(3)
    }
})

module.exports = Users