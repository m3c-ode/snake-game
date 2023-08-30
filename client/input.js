// const { stdin } = require('process');
const { MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MOVE_LEFT_KEY,
  EXIT_KEY,
  MESSAGES
} = require('./constants');

let connection;

const handleUserInput = function(key) {
  // your code here
  if (key === EXIT_KEY) {
    console.log("Exiting game");
    process.exit();
  }

  // Mouvements
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === 'd' || key === 'D') {
    connection.write("Move: right");
  }

  // Messages
  if (MESSAGES[key]) connection.write(MESSAGES[key]);
  // if (key === 'p' || key === 'P') {
  //   connection.write("Say: I'm here");
  // }
  // if (key === 'o' || key === 'O') {
  //   connection.write("Say: Careful!");
  // }
  // if (key === 'i' || key === 'I') {
  //   connection.write("Say: gotcha!");
  // }
  // if (key === 'l' || key === 'L') {
  //   connection.write("Say: BOOYAH!");
  // }
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