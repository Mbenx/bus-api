//=== settingan
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var router     = express.Router();
var port       = process.env.PORT || 3000;

//==== konfigrasi bodyParser
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//midlleware
router.use(function(req, res, next) {
  console.log('Middleware berjalan pada: ', Date.now());
  next();
});

//test router
router.get('/', function(req, res){
  res.json({ message: "anda di home!"});
});



//===== prefix api
app.use('/api', router);

app.listen(port);
console.log(' port run on.. '  + port);
