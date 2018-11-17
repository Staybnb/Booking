var mysql = require("promise-mysql");

pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "booking",
  connectionLimit: 5
});

function getMySqlConnection() {
  // console.log('get')
  return pool.getConnection().disposer(function(connection) {
    pool.releaseConnection(connection);
  });
}

module.exports = getMySqlConnection;
