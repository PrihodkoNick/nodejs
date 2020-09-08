const log = require('./logger')(module);
const words = require("./ru"); 

const days = 365;

function greeting () {
  log(`${words.Hello}, ${words.World}!`);
}

module.exports = { greeting, days };

// console.log(module);