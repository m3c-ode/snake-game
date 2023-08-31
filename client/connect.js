const net = require('net');
const { IP, PORT } = require('./constants');
const readLine = require('readline');

const connect = function(callback) {
  const conn = net.createConnection({
    host: IP ? IP : "localhost",
    port: PORT ? PORT : 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', (message) => {
    console.log("🚀 ~ file: connect.js:12 ~ conn.on ~ message:", message);
    console.log('Client connected to server');

    const rl = readLine.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter your name: ', (name) => {
      conn.write("Name: " + name); // Send the name to the server
      rl.close(); // Close the readline interface
      callback(conn); // Call the callback function with the established connection
    });
  });

  conn.on("data", (data) => {
    console.log('data from server: ', data);
  });

  return conn;
};

module.exports = { connect };
