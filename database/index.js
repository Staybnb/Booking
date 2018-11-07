const mysql = require('promise-mysql')
const legacy = require('./legacy.js')

pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'booking',
  connectionLimit: 10
});

const getListing = (id) => {
	return legacy.getListingData(id);
}

const postListing = (payload) => {
	console.log('db post listing')
	console.log(payload)
}

module.exports.getListing = getListing;
module.exports.postListing = postListing;


