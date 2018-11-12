const exec = require('child_process').exec;
exec('mongoimport -d booking -c apartment --type csv --file /Users/benjaminmangold/HackReactor/sb-Booking/apartment.csv --headerline',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });