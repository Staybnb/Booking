console.log('seeding db')

const exec = require('child_process').exec;
console.log(__dirname)
var yourscript = exec('mysql -u root --local-infile < /Users/benjaminmangold/HackReactor/sb-Booking/seed_mysql/seed.sql;',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });