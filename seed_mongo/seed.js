console.log('seeding db')

// const exec = require('child_process').exec;
// var yourscript = exec('sh ' + __dirname + '/seed.sh',
//         (error, stdout, stderr) => {
//             console.log(`${stdout}`);
//             console.log(`${stderr}`);
//             if (error !== null) {
//                 console.log(`exec error: ${error}`);
//             }
//         });

const exec = require('child_process').exec;
var yourscript = exec('mongoimport -d booking -c apartment --type csv --file /Users/benjaminmangold/HackReactor/sb-Booking/seed_mongo/sample.csv --headerline',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });