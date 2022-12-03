const express = require('express')

const app = express()
const { port } = require('../config').api
//? la importacion del puerto también puede ser sin destructuracion de la siguiente manera
//? const port = require('../config').api.port

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: 'OK!'})
})

app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})
