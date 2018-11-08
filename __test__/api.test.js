const request = require('supertest');
const app = require('../server/app')
describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test the sample client path', () => {
  test('It should response the GET method', (done) => {
      request(app).get('/listing?id=1').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});

describe('Test getting all listings', () => {
  test('It should response the GET method', (done) => {
      request(app).get('/api/listings').then((response) => {
          expect(response.statusCode).toBe(200);
          done();
      });
  });
});

