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

// load 10 million rows
const numPasses = 5;
const numListings = 1000000;

var writer = csvWriter({ headers: ["price", "minStay", "stars", "numRatings", "max" ], separator: ', '})
let writeStream = fs.createWriteStream('out2.csv', {flags: 'a'})
writer.pipe(writeStream)

let writeOneMillion = () => {
  let row = [];
  
  for (let i = 0; i < numListings; i++) {
    row = [faker.commerce.price(), faker.random.number(), faker.random.number(), faker.random.number(), faker.random.number()]
    writer.write(row)
  }
}

for (let j = 0; j < numPasses; j++) {
  writeOneMillion();
  let used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
}
writer.end()
writer.destroy()

// this file must generate a .csv file to be used by each db

// apartment.csv
// price, minStay, stars, numRatings, max 
// 10, 1, 123, 10, 1, 90210  
// ...

// dates.csv


