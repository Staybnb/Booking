console.log('seeding db')

const exec = require('child_process').exec;
console.log(__dirname)
var yourscript = exec('sh ' + __dirname + '/seed.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });