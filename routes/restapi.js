var express = require( 'express' );
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
// MongoDB用ファイルを指定
var collection = require( '../mongo' );
var COL = 'default';

// For Cross Origin
router.all( '/*', function ( req, res, next ) {
  res.contentType( 'json' );
  res.header( 'Access-Control-Allow-Origin', '*' );
  next();
} );

// GET find
router.get( '/json/default', function ( req, res ) {
  collection(COL).find().toArray(function(err, docs){
    res.send(docs);
  })
} );

// GET find :id
router.get( '/json/data', function ( req, res ) {
  collection(COL).find().toArray(function(err, docs){
    res.send(docs);
  })
} );

// GET find :id
router.get( '/json/data/:collection', function ( req, res ) {
  collection(req.params.collection).find().toArray(function(err, docs){
    res.send(docs);
  })
} );

// POST insert data
router.post( '/json/default', function ( req, res ) {
  collection(COL).insertMany( req.body ).then(function(r) {
    res.send( r );
  });
} );

// // POST insert data
// router.post( '/json/single/:collection', function ( req, res ) {
//   collection(req.params.collection).insertOne( req.body ).then(function(r) {
//     res.send( r );
//   });
// } );
router.post( '/json/data', function ( req, res ) {
  collection(COL).insertMany( req.body ).then(function(r) {
    res.send( r );
  });
} );

router.post( '/json/data/:collection', function ( req, res ) {
  collection(req.params.collection).insertMany( req.body ).then(function(r) {
    res.send( r );
  });
} );


module.exports = router;
