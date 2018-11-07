const mysql = require('promise-mysql')
const legacy = require('./legacy.js')
var Promise = require("bluebird");
var getSqlConnection = require('./dbConnection.js');

const getListingData = (id) => {
	return legacy.getListingData(id);
}

const getListing = (id) => {
	console.log('db get listing')
}

const postListing = (payload) => {
	console.log('db post listing');
	console.log(payload);
}

const deleteListing = (id) => {
	console.log('db delete listing');
	console.log(id);
}

module.exports.getListingData = getListingData;
module.exports.postListing = postListing;
module.exports.deleteListing = deleteListing;


