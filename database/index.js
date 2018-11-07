const mysql = require('mysql')
const legacy = require('./legacy.js')

// legacy functionality utilizing mysqlp
// TODO: replicate this functionality with updated schema
const getData = (id) => {
	return legacy.getData(id);
}

module.exports.getData = getData;



