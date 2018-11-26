var async = require('async');
var fs = require('fs');
var pg = require('pg');

// Connect to the "bank" database.
var config = {
    user: 'maxroach',
    host: '104.248.111.122',
    database: 'booking',
    port: 26257,
    ssl: {
        ca: fs.readFileSync('./certs/ca.crt')
            .toString(),
        key: fs.readFileSync('./certs/client.maxroach.key')
            .toString(),
        cert: fs.readFileSync('./certs/client.maxroach.crt')
            .toString()
    }
};

// Create a pool.
var pool = new pg.Pool(config);

pool.connect(function (err, client, done) {

    // Close communication with the database and exit.
    var finish = function () {
        done();
        process.exit();
    };

    if (err) {
        console.error('could not connect to cockroachdb', err);
        finish();
    }
    async.waterfall([
            function (next) {
                // Create the 'accounts' table.
                client.query('CREATE TABLE IF NOT EXISTS apartment (id INT PRIMARY KEY AUTO_INCREMENT, price INT, max INT, minStay INT, stars INT, numRatings INT);', next);
            },
            function (next) {
                // Create the 'accounts' table.
                client.query('CREATE TABLE IF NOT EXISTS apartment (id INT PRIMARY KEY AUTO_INCREMENT, date INT, max INT, minStay INT, );', next);
            },

        ],
        function (err, results) {
            if (err) {
                console.error('Error createing tables apartment and dates: ', err);
                finish();
            }

            console.log('Init:');
            results.rows.forEach(function (row) {
                console.log(row);
            });

            finish();
        });
});