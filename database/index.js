const mysql = require('promise-mysql')
const legacy = require('./legacy.js')
var Promise = require("bluebird");
var getSqlConnection = require('./dbConnection.js');

// performs joins to get all dates for listing
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

// '10000','10','1','1','1000'
const postListing = ({ price, minStay, stars, numRatings, max }) => {
	return Promise.using(getSqlConnection(), function(connection) {
    return connection.query('insert into apartment (price, minStay, stars, numRatings, max) values (?,?,?,?,?)', [price, minStay, stars, numRatings, max]).then(function(rows) {
      return (rows)
    }).catch(function(error) {
      console.log(error);
    });
  })
}

const deleteListing = (id) => {
	return Promise.using(getSqlConnection(), function(connection) {
		return connection.query('delete from apartment where id = ?', id.toString()).then((res) => {
			return res;
		}).catch((err) => {
			return err;
		})
	})
}

const getDates = () => {
	console.log('db get dates')
	return Promise.using(getSqlConnection(), function(connection) {
    return connection.query('select * from dates').then(function(rows) {
      return (rows)
    }).catch(function(error) {
      console.log(error);
    });
  })
}

// '1/02/2019','1'
const postDate = ({ date, apartmentId }) => {
	return Promise.using(getSqlConnection(), function(connection) {
    return connection.query('insert into dates (date, apartment_id) values (?,?)', [date, apartmentId]).then(function(rows) {
      return (rows)
    }).catch(function(error) {
      console.log(error);
    });
  })
}

const deleteDate = (id) => {
	return Promise.using(getSqlConnection(), function(connection) {
		return connection.query('delete from dates where id = ?', id.toString()).then((res) => {
			return res;
		}).catch((err) => {
			return err;
		})
	})
}

// client api
module.exports.getListingData = getListingData;

// crud api
module.exports.getListings = getListings;
module.exports.postListing = postListing;
module.exports.deleteListing = deleteListing;

module.exports.getDates = getDates;
module.exports.postDate = postDate;
module.exports.deleteDate = deleteDate;