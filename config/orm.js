// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(callback) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  create: function(burger_name, callback) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES ('"+burger_name+"') ";
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(burger_id, callback) {
    var queryString = "UPDATE burgers SET devoured=true WHERE id="+burger_id;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
