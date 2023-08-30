const net = require('net');
const { connect } = require('./connect');
const { stdin } = require('process');
const { setupInput } = require('./input');

console.log("connecting...");
const connection = connect();
setupInput(connection);
