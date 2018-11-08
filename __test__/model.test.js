const db = require('../database/index.js')
var Promise = require("bluebird");

// bluebird seems to take care of opening and closing connection

describe('Test db connection', () => {
  test('db method should return a promise', () => {
      expect(typeof db.getListings()).toBe('object')
      return expect(db.getListings()).toBeInstanceOf(Promise)
  });
})

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});