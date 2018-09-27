//=== settingan
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const router = express.Router();
// const port = process.env.PORT || 3000;



var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://busApi:Pass#busApi@mongoatlas-shard-00-00-zwsmf.mongodb.net:27017,mongoatlas-shard-00-01-zwsmf.mongodb.net:27017,mongoatlas-shard-00-02-zwsmf.mongodb.net:27017/test?ssl=true&replicaSet=mongoAtlas-shard-0&authSource=admin&retryWrites=true";
MongoClient.connect(uri, function(err, db) {
   db.close();
});


//==== konfigrasi bodyParser
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());

// //midlleware
// router.use(function (req, res, next) {
//   console.log('Middleware berjalan pada: ', Date.now());
//   next();
// });

// //test router
// router.get('/', function (req, res) {
//   res.json({
//     message: "anda di home!"
//   });
// });

// router.get('/welcome', function (req, res) {
//   res.json({
//     message: "Welcome"
//   });
// });



// //===== prefix api
// app.use('/api', router);

// app.listen(port);
// console.log(' port run on.. ' + port);