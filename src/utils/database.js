const { Sequelize } = require('sequelize')
const config = require('../../config') 

const db = new Sequelize({
  dialect: 'postgres',
  host: config.db.user,
  password: config.db.pass,
  host: config.db.host, 
  port: config.db.port,
  database: config.db.name
})


module.exports = db