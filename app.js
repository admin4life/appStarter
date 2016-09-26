var express = require('express');
var pug = require('pug');

var app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.pug', {title: "Page Title", headline: "This Headline"})
})

app.listen(9999);
