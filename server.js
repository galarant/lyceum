// server.js 
// modules =======================
var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var routes         = require('./backend/routes');
//var db           = require('./config/db');


// configuration =================
var app = express();

// mongoose.connect(db.url);
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/frontend'));
app.use('*', routes);

var port = process.env.PORT || 8000;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Lyceum listening at http://%s:%s', host, port);

});
