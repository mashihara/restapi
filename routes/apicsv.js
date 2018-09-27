var express = require( 'express' );
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
// MongoDB用ファイルを指定
var collection = require( '../mongo' );
var COL = 'defaultcsv';

var bodyParser = require('body-parser');
router.use(bodyParser.text({ type:'*/*' }));

// For Cross Origin
router.all( '/*', function ( req, res, next ) {
  res.contentType( 'json' );
  res.header( 'Access-Control-Allow-Origin', '*' );
  next();
} );

// ======================= GET =======================
// GET find :id
router.get( '/', function ( req, res ) {
  collection(COL).find().toArray(function(err, docs){
    res.send(docs);
  })
} );

// GET find :id
router.get( '/:collection', function ( req, res ) {
  collection(req.params.collection + 'csv').find().toArray(function(err, docs){
    res.send(docs);
  })
} );

// ======================= POST =======================
// POST csv or xml
router.post( '/', function ( req, res ) {
  var document = { data: req.body}
  console.log('document:', document)

  collection(COL).insertOne( document ).then(function(r) {
    res.send( r );
  });
} );

router.post( '/:collection', function ( req, res ) {
  var document = {data: req.body}
  console.log(document)
  collection(req.params.collection + 'csv').insertOne( document ).then(function(r) {
    res.send( r );
  });
} );

module.exports = router;
