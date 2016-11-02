var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index1.html" );
   // res.end(JSON.stringify(response));
})

// app.get('/process_get', urlencodedParser, function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       first_name:req.query.first_name,
//       last_name:req.query.last_name
//    };
//    console.log(response);
//    // res.end(JSON.stringify(response));
//    res.json(response);
// })

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   // res.end(JSON.stringify(response));
   res.json(response);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
