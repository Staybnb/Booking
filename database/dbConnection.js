var mysql = require('promise-mysql');
 
pool = mysql.createPool({
  host: 'localhost',
  user: 'sauron',
  password: 'theonetruering',
  database: 'mordor',
  connectionLimit: 10
});
 
function getSqlConnection() {
  return pool.getConnection().disposer(function(connection) {
    pool.releaseConnection(connection);
  });
}
 
module.exports = getSqlConnection;