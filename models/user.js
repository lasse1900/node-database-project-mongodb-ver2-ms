const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectID

class User {
  constructor(username, email) {
    this.name = username
    this.email = email
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