var express = require ('express');
var bodyParser = require('body-parser');
//var users = require('./data/users.json');
var path = require('path');
var  app = express();

//Load view engine
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'html');

//Body-parser middleware
app.use(bodyParser.urlencoded({extended:true}));

//Parse Application/JSON
//app.use(bodyParser.json());

//Set Public folder
app.use(express.static(path.join(__dirname + '/scripts')));
app.use(express.static(path.join(__dirname + '/node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/public/images')));
app.use(express.static(path.join(__dirname + '/views')));
app.use(express.static(path.join(__dirname + '/data')));

//Home Rout
app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/data/', function (req, res) {
  res.render('colors.json');
});

//Start Server
app.listen(3000, function () {
  console.log('App listenimg on port 3000!');
});
