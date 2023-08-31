const { MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MOVE_LEFT_KEY,
  EXIT_KEY,
  MESSAGES
} = require('./constants');

let connection;
let moving;

const handleUserInput = function(key) {
  // your code here
  if (key === EXIT_KEY) {
    console.log("Exiting game");
    process.exit();
  }

  // Movements
  if (MOVE_UP_KEY.includes(key)) {
    // connection.write("Move: up");
    constantMoving('up');
  }
  if (MOVE_LEFT_KEY.includes(key)) {
    // connection.write("Move: left");
    constantMoving('left');

  }
  if (MOVE_DOWN_KEY.includes(key)) {
    // connection.write("Move: down");
    constantMoving('down');

  }
  if (key === 'd' || key === 'D') {
    // connection.write("Move: right");
    constantMoving('right');
  }

  // Messages
  if (MESSAGES[key]) connection.write(MESSAGES[key]);

};

const constantMoving = (direction) => {
  if (moving) clearInterval(moving);
  moving = setInterval(() => {
    connection.write(`Move: ${direction}`);
  }, 100);
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