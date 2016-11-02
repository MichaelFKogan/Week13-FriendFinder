/*
INSTRUCTIONS
Your html-routes.js file should include two routes:

A GET Route to /survey which should display the survey page.

A default USE route that leads to home.html which displays the home page.
*/

// Routes
// =============================================================

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../../app/public/home.html'));
});

app.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname, '../../app/public/survey.html'));
});


}//Close module.exports


