const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectID

class User {
  constructor(username, email, cart, id) {
    this.name = username
    this.email = email
    this.cart = cart // {items: []}
    this._id = id
  }

  save() {
    const db = getDb()
    let dbOb;
    if (this._id) {
      return dbOb = db
        .collection('users')
        .insertOne(this)
    }
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id
    // })

    // product.quantity = 1
    // const updtetedCart = {items: [product]}

    const updtetedCart = {
      items: [{ productId: new ObjectId(product._id), quantity: 1 }]
    }
    const db = getDb()
    return db
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updtetedCart } })
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection('users')
      .findOne({ _id: new mongodb.ObjectId(userId) })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User