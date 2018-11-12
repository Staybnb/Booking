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
var writer = csvWriter({ headers: ["price", "minStay", "stars", "numRatings", "max" ], separator: ', '})
writer.pipe(fs.createWriteStream('out.csv'))
for (let i = 0; i < 1000; i++) {
  writer.write(['world', 'bar', 'one', 'two', 'three'])
}
writer.end()

// this file must generate a .csv file to be used by each db

// apartment.csv
// price, minStay, stars, numRatings, max 
// 10, 1, 123, 10, 1, 90210  
// ...

// dates.csv


