const faker = require('faker')
const fs = require('fs')
var csvWriter = require('csv-write-stream')
var writer = csvWriter()
// ______Default_Options______
// {
//   separator: ',',
//   newline: '\n',
//   headers: undefined,
//   sendHeaders: true
// }
// ===========================

const numListings = 10000000
var writer = csvWriter({ headers: ["price", "minStay", "stars", "numRatings", "max" ], separator: ', '})
writer.pipe(fs.createWriteStream('out.csv'))
for (let i = 0; i < numListings; i++) {
  writer.write([faker.commerce.price(), faker.random.number(), faker.random.number(), faker.random.number(), faker.random.number()])
}
writer.end()

// this file must generate a .csv file to be used by each db

// apartment.csv
// price, minStay, stars, numRatings, max 
// 10, 1, 123, 10, 1, 90210  
// ...

// dates.csv


