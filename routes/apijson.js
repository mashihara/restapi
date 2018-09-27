var express = require( 'express' );
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
// MongoDB用ファイルを指定
var collection = require( '../mongo' );
var COL = 'defaultjson';

router.use(express.json())

// For Cross Origin
router.all( '/*', function ( req, res, next ) {
  res.contentType( 'json' );
  res.header( 'Access-Control-Allow-Origin', '*' );
  next();
} );


// GET find :id
router.get( '/', function ( req, res ) {
  collection(COL).find().toArray(function(err, docs){
    res.send(docs);
  })
} );

// GET find :id
router.get( '/:collection', function ( req, res ) {
  collection(req.params.collection + 'json').find().toArray(function(err, docs){
    res.send(docs);
  })
} );

// POST json
router.post( '/', function ( req, res ) {
  collection(COL).insertMany( req.body ).then(function(r) {
    res.send( r );
  });
} );

// POST json
router.post( '/:collection', function ( req, res ) {
  console.log('req.body:', req.body)
  collection(req.params.collection + 'json').insertMany( req.body ).then(function(r) {
    res.send( r );
  });
} );

module.exports = router;
