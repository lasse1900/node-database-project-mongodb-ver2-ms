const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'lasselasse', {
  dialect: 'mysql',
  host: 'localhost'
})

module.exports = sequelize