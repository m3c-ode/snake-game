// const { stdin } = require('process');

let connection;

const handleUserInput = function(key) {
  // your code here
  if (key === '\u0003') {
    console.log("Exiting game");
    process.exit();
  }

  if (key === 'w' || key === 'W') {
    connection.write("Move: up");
  }
  if (key === 'a' || key === 'A') {
    connection.write("Move: left");
  }
  if (key === 's' || key === 'S') {
    connection.write("Move: down");
  }
  if (key === 'd' || key === 'D') {
    connection.write("Move: right");
  }
};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };