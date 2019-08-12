
// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));


  // Parse application/x-www-form-urlencoded
  //app.use(bodyParser.urlencoded({ extended: false }));
  // Override with POST having ?_method=DELETE   
  //app.use(methodOverride('_method'));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

// Open Server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT + " (if running locally)");
});