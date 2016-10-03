var express = require('express');
var pug = require('pug');
var low = require('lowdb');
var bodyParser = require('body-parser');

var db = low('db.json');

var app = express();
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.pug', {title: "Page Title", headline: "This Headline"})
})
app.get('/Home', function(req,res){
  res.redirect('/');
});

//
// contacts
//
app.get('/contacts', function(req, res){
  var compTemplate = pug.compileFile('./views/contacts.pug');
  var template = compTemplate();
  res.json({page: template});
})
app.post('/contacts', function(req, res){
  var term = req.body.term;
  if(term){
    var data = db.get('ppl').filter({name: {first: term}}).value();
  }
  else {
    var data = db.get('ppl').value();
  }
  return res.json({data});
})

app.listen(9999);
