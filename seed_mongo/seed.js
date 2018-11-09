console.log('seeding db')

const exec = require('child_process').exec;
var yourscript = exec('sh seed.sh',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });