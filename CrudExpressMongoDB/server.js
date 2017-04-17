const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

//https://zellwk.com/blog/crud-express-mongodb/
//https://zellwk.com/blog/crud-express-and-mongodb-2/
// https://mlab.com/databases/star-wars-quotes/collections/quotes
// https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

// set view engine
app.set('view engine', 'ejs');

// Map folder public
app.use(express.static('public'));
// Once the view engine is set, we can begin generating the HTML with our quotes.

var db;

MongoClient.connect('mongodb://admin:123456@ds161400.mlab.com:61400/star-wars-quotes', (err, database) => {
	if(err) {
		return console.log(err);
	}

	db = database;
	app.use(bodyParser.urlencoded({extended: true}));
	app.listen(3000, () => {
		console.log('listening on 3000');
	});

	/* get action */
	app.get('/', function(request, response){
		var cursor = db.collection('quotes').find().toArray(function(err, results) {
		  	if (err)
		  	{
		  		 return console.log(err);
		  	}
		    // renders index.ejs
		    response.render('index.ejs', {quotes: results});
		});
		console.log(cursor);
	});

	// post
	app.post('/quotes', (req, res) => {
	  db.collection('quotes').save(req.body, (err, result) => {
	    if (err) return console.log(err);

	    console.log('saved to database');
	    res.redirect('/');
	  })
	})
});

// 


// app.listen(3000,function() {
// 	console.log('listen on 3000');
// });



// /*Post*/
// app.post('/quotes', (req, res) => {
// 	// console.log("Hellooooooooooo");
// 	console.log(req.body)
// });