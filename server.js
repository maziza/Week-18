// dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request'); 
var cheerio = require('cheerio');
var Note = require('./models/Note.js');
var Article = require('./models/Article.js');

// Mongoose database config with heroku
mongoose.connect('');
var db = mongoose.connection;

//mongoose connection check
db.on('error', function(err) {
  console.log('Error:', err);
});

db.once('open', function() {
  console.log('connected.');
});

//routes
app.get('/', function(req, res) {
  res.send(index.html);
});

//request to scrape
app.get('/scrape', function(req, res) {
  //request site
  request('http://www.orlandosentinel.com/', function(error, response, html) {
    //load to cheerio
    var $ = cheerio.load(html);
    // grab title of each article
    $('title').each(function(i, element) {

        // save an empty result object
        var result = {};

        // add the text and href of every link, properties to object

        result.title = $(this).children('a').text();
        result.link = $(this).children('a').attr('href');
		
		var entry = new Article (result);

				entry.save(function(err, doc) {
				  	if (err) {
					    console.log(err);
					 } else {
					    console.log(doc);
					 }
				});

			});
		});

    res.send("Done");
});

// Note for articles
// app.post('/articles/:id', function(req, res){
// var newNote = new Note(req.body);
//  //   newNote.save(function(err, doc){
//       Article.findOneAndUpdate({'_id': req.params.id}, {'note':doc._id})
//           res.send(doc);


app.listen(process.env.PORT || 3000, function(){
  console.log('App running on port 3000!');
});
