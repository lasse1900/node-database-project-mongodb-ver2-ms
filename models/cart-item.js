const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const CartItem = sequelize.define('cartItem', {
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantiy: Sequelize.INTEGER
})

module.exports = CartItem