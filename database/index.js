const mysql = require('promise-mysql')
const legacy = require('./legacy.js')
var Promise = require("bluebird");
var getSqlConnection = require('./dbConnection.js');

const getListingData = (id) => {
	return legacy.getListingData(id);
}

const getListings = () => {
	console.log('db get listings')
	return Promise.using(getSqlConnection(), function(connection) {
    return connection.query('select * from apartment').then(function(rows) {
      return (rows)
    }).catch(function(error) {
      console.log(error);
    });
  })
}

const postListing = (payload) => {
	console.log('db post listing')
	console.log(payload);
	return Promise.using(getSqlConnection(), function(connection) {
    return connection.query('insert into apartment (price, minStay, stars, numRatings, max) values (?,?,?,?,?)', ['10000','10','1','1','1000']).then(function(rows) {
      return (rows)
    }).catch(function(error) {
      console.log(error);
    });
  })
}

const deleteListing = (id) => {
	console.log('db delete listing');
	console.log(id);
	return Promise.using(getSqlConnection(), function(connection) {
		console.log('prom')
		return connection.query('delete from apartment where id = ?', id.toString()).then((res) => {
			console.log('hi');
			console.log(res);
			return res;
		}).catch((err) => {
			console.log('boo')
			return err;
		})
	})
}

module.exports.getListingData = getListingData;

module.exports.getListings = getListings;
module.exports.postListing = postListing;
module.exports.deleteListing = deleteListing;


