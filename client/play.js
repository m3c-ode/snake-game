const { connect } = require('./connect');
const { setupInput } = require('./input');

console.log("connecting...");
// const connection = connect();
// setupInput(connection);
connect((connection) => {
  setupInput(connection);
});
