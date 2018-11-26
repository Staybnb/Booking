var async = require("async");
var pool = require('./connection.js').pool;

// Connect to the "booking" database.

// NOTE this user does not have root permissions
// 'booking' db must exist, and db permissions must be granted to user

function connectAndSeed(pool) {
  // create and seed tables with a certain row
  pool.connect(function(err, client, done) {
    // Close communication with the database and exit.
    var finish = function() {
      done();
      process.exit();
    };
  
    if (err) {
      console.error("could not connect to cockroachdb", err);
      finish();
    }
    async.waterfall(
      [ 
        function(next) {
          client.query("DROP TABLE IF EXISTS dates", next)
        },
        function(results, next) {
          client.query("DROP TABLE IF EXISTS apartment", next);
        },
        function(results, next) {
          // Create the 'apartment' table.
          client.query(
            "CREATE TABLE IF NOT EXISTS apartment (id SERIAL PRIMARY KEY , price INT, max INT, minStay INT, stars INT, numRatings INT);",
            next
          );
        },
        function(results, next) {
          // Create the 'dates' table.
          client.query(
            "CREATE TABLE IF NOT EXISTS dates (id SERIAL PRIMARY KEY , date STRING, apartment_id INT REFERENCES apartment (id) ON DELETE CASCADE);",
            next
          );
        },
        function(results, next) {
  
          client.query(
            "INSERT INTO apartment (id, price, minStay, stars, numRatings, max) VALUES ('1', '40', '2', '4', '78', '4') returning id", 
            next
          );
        },
        function(results, next) {
          client.query(
            `INSERT INTO dates (date, apartment_id) VALUES ('2018-11-01','${results.rows[0].id}')`,
            next
          )
        }
      ],
      function(err, results) {
        if (err) {
          console.error("Error createing tables apartment and dates: ", err);
          finish();
        }
  
        console.log("Init:");
        results.rows.forEach(function(row) {
          console.log(row);
        });
  
        finish();
      }
    );
  });
}

// client api
module.exports.connectAndSeed = connectAndSeed;
