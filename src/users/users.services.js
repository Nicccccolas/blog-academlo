const { json } = require('sequelize')
const userControllers = require('../users/users.controllers')

const getAllUser=  (req, res) => {
console.log('Este es mi req.user: ', req.user)

    userControllers.findAllUsers()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getUserById = (req, res) => {
    const id = req.params.id

    userControllers.findUserById(id)
        .then((data) => {
            if(data){
                
            res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postUser = (req, res) => {
    const {first_name, last_name, user_name, email, password, age, country} = req.body

    userControllers.createUser({first_name, last_name, user_name, email, password, age, country})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message,
                fiels: {
                    first_name: 'string',
                    last_name: 'string',
                    user_name: 'string',
                    email: 'string',
                    password: 'string',
                    age: 'number',
                    country: 'COL'
                }
            })
        })
}

const patchUser = (req, res) => {
    const id = req.params.id
    const {first_name, last_name, user_name, age, country } = req.body

    userControllers.updateUser(id, {first_name, last_name, user_name, age, country})
        .then((data) => {
            if(data){
                res.status(200).json({message: 'User modified succesfully'})
            } else {
                res.status(404).json({message: 'Invalid id'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const deleteUser = (req, res) => {
    const id = req.params.id

    userControllers.deleteUser(id)
        .then((data) => {
            if(data){
                res.status(200).json({message: 'User deleted succesfully!'})
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

//? --- /api/v1/users/me

const getMyUser = (req, res) => {
    const id = req.user.id

    userControllers.findUserById(id)
        .then((data) => {
            res.status(200).json(data)
        })  
        .catch((err) => {
            res.status(400).json({message: err.message})
        })


}

module.exports = {
    getAllUser,
    getUserById,
    postUser,
    patchUser, 
    deleteUser, 
    getMyUser
}