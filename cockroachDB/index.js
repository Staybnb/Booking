var seed = require("./seed.js").connectAndSeed;
var pool = require("./connection.js").pool;

// seed(pool)

function getListings() {
  query("select * from apartment limit 100", result => {
    console.log(result.rows);
    return result;
  });
}

function postListing({ price, minStay, stars, numRatings, max }) {
  query(
    `insert into apartment (price, minStay, stars, numRatings, max) values (${price},${minStay},${stars},${numRatings},${max}) returning id`,
    result => {
      console.log(result.rows);
      return result;
    }
  );
}

function postListingId({ id, price, minStay, stars, numRatings, max }) {
  query(
    `insert into apartment (id, price, minStay, stars, numRatings, max) values (${id}, ${price},${minStay},${stars},${numRatings},${max}) returning id`,
    result => {
      console.log(result.rows);
      return result;
    }
  );
}

function deleteListing({ id }) {
  query(`delete from apartment where id = ${id}`, result => {
    console.log(result);
    return result;
  });
}

function getDates() {
  query("select * from dates limit 100", result => {
    console.log(result.rows);
    return result;
  });
}

function postDate({ date, apartmentId }) {
  query(
    `insert into dates (date, apartment_id) values ('${date}',${apartmentId})`,
    result => {
      console.log(result.rows);
      return result;
    }
  );
}

function deleteDate({ id }) {
  query(`delete from dates where id = ${id}`, result => {
    console.log(result);
    return result;
  });
}


function query(query, cb) {
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
    
    client.query(query, (err, res) => {
      if (err) throw err;
      // console.log(res.rows)
      cb(res);
      finish();
    });
  });
}

// crud api
module.exports.getListings = getListings;
module.exports.postListing = postListing;
module.exports.postListingId = postListingId;
module.exports.deleteListing = deleteListing;

module.exports.getDates = getDates;
module.exports.postDate = postDate;
module.exports.deleteDate = deleteDate;



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