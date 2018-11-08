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

// test create listing

// test delete that listing

// test create date

// test delete that date