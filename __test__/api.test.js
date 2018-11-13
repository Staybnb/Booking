const request = require('supertest');
const app = require('../server/app')

describe('Test the root path', () => {
  test('It should response the GET method', () => {
      return request(app).get('/').expect(200);
  });
})

describe('Test the sample path', () => {
  test('It should response the GET method', () => {
      return request(app).get('/listing?id=1').expect(200);
  });
})

describe('Test getting all listings', () => {
  test('It should response the GET method', () => {
      return request(app).get('/api/listings').expect(200);
  });
})

describe('Test getting all dates', () => {
  test('It should response the GET method', () => {
      return request(app).get('/api/dates').expect(200);
  });
})

let insertId = 0;

// test create and delete listing
describe('Test posting and deleting a listing', function() {
  it('responds with json', function(done) {
    request(app)
      .post('/api/listing')
      .send({ price: '10', minStay: '1', stars: '5', numRatings: '1', max: '5' })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        insertId = JSON.parse(res.text).insertId;
        console.log('created listing ' + insertId)
        done();
      });
  });
});

// test delete that listing
describe('Test posting and deleting a listing', function() {
  it('should delete the inserted listing', function(done) {
    request(app)
      .delete('/api/listing/' + insertId)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        console.log('deleted listing ' + insertId)
        done();
      })
  })
});
// test create date
describe('Test posting a listing', function() {
  it('responds with json', function(done) {
    request(app)
      .post('/api/date')
      .send({ date: '1/02/2019', apartmentId: '1' })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});


// test delete that date