/**
 * node-mongodbのドキュメント
 * http://mongodb.github.io/node-mongodb-native/2.1/
 */
var db;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db = client.db(dbName);
});


var collection = function( name ) {
  return db.collection( name );
}

module.exports = collection;
