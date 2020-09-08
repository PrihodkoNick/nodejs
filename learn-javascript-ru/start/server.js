const words = require("./ru"); 

const days = 365;

function greeting () {
  console.log(`${words.Hello}, ${words.World}!`);
}

module.exports = { greeting, days };

console.log(module);