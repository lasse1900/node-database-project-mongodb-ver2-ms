const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://academic:paarynapuu@cluster0-itz0t.mongodb.net/test?retryWrites=true&w=majority')
    .then(client => {
      console.log('Connected')
      callback(client)
    })
    .catch(err => console.log(err))
}

module.exports = mongoConnect