'use strict';

// this module provides data generation functions for Artillery load tests
// https://artillery.io/blog/using-fakerjs-with-artillery

module.exports = {
  generateApartmentData,
  generateApartmentDataId,
  generateDateData
};

const faker = require('faker');

var aptIdCounter = 1;
function generateDateData(userContext, events, done) {
  const date = `201${faker.random.number() % 10}-${(faker.random.number() % 11) +1}-${((faker.random.number() % 29) + 1)}`
  const apartmentId = aptIdCounter++ % 5000

  userContext.vars.date = date;
  userContext.vars.apartmentId = apartmentId;

  return done();
}

var idCounter = 1;
function generateApartmentDataId(userContext, events, done) {
  // generate data with Faker:
  const id = idCounter++;
  const price = faker.commerce.price();
  const minStay = (faker.random.number() % 5) + 1;
  const stars = (faker.random.number() % 5) + 1;
  const numRatings = (faker.random.number() % 100) + 1
  const max = (faker.random.number() % 12) + 6
  // add variables to virtual user's context:
  userContext.vars.price = price;
  userContext.vars.minStay = minStay;
  userContext.vars.numRatings = numRatings;
  userContext.vars.max = max;
  userContext.vars.stars = stars;
  userContext.vars.id = id;
  // continue with executing the scenario:
  return done();
}

function generateApartmentData(userContext, events, done) {
  // generate data with Faker:
  const price = faker.commerce.price();
  const minStay = (faker.random.number() % 5) + 1;
  const stars = (faker.random.number() % 5) + 1;
  const numRatings = (faker.random.number() % 100) + 1
  const max = (faker.random.number() % 12) + 6
  // add variables to virtual user's context:
  userContext.vars.price = price;
  userContext.vars.minStay = minStay;
  userContext.vars.numRatings = numRatings;
  userContext.vars.max = max;
  userContext.vars.stars = stars;

  // continue with executing the scenario:
  return done();
}