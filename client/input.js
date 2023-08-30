// const { stdin } = require('process');

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    console.log("Exiting game");
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };