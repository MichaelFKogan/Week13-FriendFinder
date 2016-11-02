/*
INSTRUCTIONS
Your api-routes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/

var userData 		= require('../data/friends.js');


// Routes
// =============================================================

module.exports = function (app) {

// Basic route that sends the user first to the AJAX Page
app.get('/api/friends', function (req, res) {
	res.json(userData);
});

app.post('/api/friends', function (req, res) {
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

}//Close module.exports

