var pool = require("./connection.js").pool;
var query = require('./query.js').query

function getListingData(id) {
  return new Promise((resolve, reject) => {
    console.log('querying listing ' + id)
    query(`
      SELECT * FROM apartment t1 
      INNER JOIN dates t2 ON t1.id = t2.apartment_id
		  WHERE t1.id=${id};
		`, (err, result) => {
      if (err) {
        console.log(err)
        reject(err); 
      }
      else {
        console.log(result.rows);
        resolve(result.rows);
      }
    });
  });
}

function getListings() {
  return new Promise((resolve, reject) => {
    query("select * from apartment limit 100", (err, result) => {
      if (err) reject(err);
      else resolve(result.rows);
    });
  });
}

function postListing({ price, minStay, stars, numRatings, max }) {
  return new Promise((resolve, reject) => {
    console.log('posting')
    query(
      `insert into apartment (price, minStay, stars, numRatings, max) values (${price},${minStay},${stars},${numRatings},${max}) returning id`,
      (err, result) => {
        if (err) {reject(err);}
        else {
          console.log('resolving')
          resolve(result.rows);
        }
      }
    );
  });
}

function postListingId({ id, price, minStay, stars, numRatings, max }) {
  return new Promise((resolve, reject) => {
    query(
      `insert into apartment (id, price, minStay, stars, numRatings, max) values (${id}, ${price},${minStay},${stars},${numRatings},${max}) returning id`,
      (err, result) => {
        if (err) reject(err);
        else resolve(result.rows);
      }
    );
  });
}

function deleteListing({ id }) {
  return new Promise((resolve, reject) => {
    query(`delete from apartment where id = ${id}`, (err, result) => {
      if (err) reject(err);
      else resolve(result.rows);
    });
  });
}

function getDates() {
  return new Promise((resolve, reject) => {
    query("select * from dates limit 100", (err, result) => {
      if (err) reject(err);
      else resolve(result.rows);
    });
  });
}

function postDate({ date, apartmentId }) {
  return new Promise((resolve, reject) => {
    query(
      `insert into dates (date, apartment_id) values ('${date}',${apartmentId})`,
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
}

function deleteDate({ id }) {
  return new Promise((resolve, reject) => {
    query(`delete from dates where id = ${id}`, result => {
      if (err) reject(err);
      else resolve(result.rows);
    });
  });
}

// client api
module.exports.getListingData = getListingData;

// crud api
module.exports.getListings = getListings;
module.exports.postListing = postListing;
module.exports.postListingId = postListingId;
module.exports.deleteListing = deleteListing;

module.exports.getDates = getDates;
module.exports.postDate = postDate;
module.exports.deleteDate = deleteDate;

// ----------- TEST VALUES ----------------

// deleteDate({ id: '403701066510532609' })

// var testDate = {
//   date:'2019-02-01',
//   apartmentId: '1'
// }
// postDate(testDate);

// getDates();

// var testDelete = {
//   id: "1"
// }
// deleteListing(testDelete)

// var testPost = {
//   price: "10",
//   minStay: "1",
//   stars: "5",
//   numRatings: "1",
//   max: "5"
// }
// postListing(testPost);

// var testPostId = {
//   id: "1",
//   price: "10",
//   minStay: "1",
//   stars: "5",
//   numRatings: "1",
//   max: "5"
// }
// postListingId(testPostId);

// ----------------------------------------
