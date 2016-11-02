// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

// ================================================================================

// Basic route that sends the user first to the AJAX Page
app.get('/api/friends', function (req, res) {
	res.json(userData);
});

// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.	
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function (req, res) {
		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.		
		// It will do this by sending out the value "true" have a table		
			userData.push(req.body);
			res.json(true); // KEY LINE		
	});

// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var userData = [
	{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ]
}
];



// START THE SERVER
// =============================================================================
// app.listen(PORT);
// console.log('Listening on port http://localhost.' + PORT);

https.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});

