const faker = require('faker')
const fs = require('fs')
var csvWriter = require('csv-write-stream')
var writer = csvWriter()

// =============================================================
// this script creates (and then appends) dates.csv
// =============================================================

console.log('appending 5 million rows to dates.csv')

// load 5 million rows into apartment.csv
const NUM_PASSES = 5;
const NUM_LISTINGS = 1000000;

var writer = csvWriter({ headers: ["date", "apartment_id"], separator: ', '})
let writeStream = fs.createWriteStream('dates.csv', {flags: 'a'})
writer.pipe(writeStream)

let writeOneMillion = () => {
  let row = [];
  
  for (let i = 0; i < NUM_LISTINGS; i++) {
    row = [(faker.random.number() % 11 + 1) + '/' + (faker.random.number() % 29 + 1) + '/201' + (faker.random.number() % 10), faker.random.number() % 1000]
    writer.write(row)
  }
}

for (let j = 0; j < NUM_PASSES; j++) {
  writeOneMillion();
  let used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
}
writer.end()
writer.destroy()

// apartment.csv
// price, minStay, stars, numRatings, max 
// 10, 1, 123, 10, 1, 90210  
// ...
