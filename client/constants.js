const IP = '165.227.47.243';
const PORT = 50541;
const MOVE_UP_KEY = ["w", "W"];
const MOVE_DOWN_KEY = ["s", "S"];
const MOVE_RIGHT_KEY = ["d", "D"];
const MOVE_LEFT_KEY = ["a", "A"];
const EXIT_KEY = "\u0003";
const MESSAGES = {
  'p': "Say: I'm here",
  'o': "Say: Careful!",
  'i': "Say: gotcha!",
  'l': "Say: BOOYAH!"
};

module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MOVE_LEFT_KEY,
  EXIT_KEY,
  MESSAGES
};