const express = require('express')

const app = express()
const db = require('./utils/database')
// const { port } = require('../config').api
//? la importacion del puerto también puede ser sin destructuracion de la siguiente manera
const port = require('../config').api.port

const userRouter = require('./users/users.router')

db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err))

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})

app.use('/api/v1/users', userRouter)

app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
})
