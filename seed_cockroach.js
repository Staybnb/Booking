// ==============================================================
//             IGNORE PLS, WORK IN PROGRESS
// ==============================================================

// Must kick off seeding of cockroach from csv file

const exec = require("child_process").exec;
const cmd = "";
console.log(cmd);
exec(cmd, (error, stdout, stderr) => {
  console.log(`${stdout}`);
  console.log(`${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});
