const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', (message) => {
    console.log("🚀 ~ file: connect.js:12 ~ conn.on ~ message:", message);
    console.log('Client connected to server');

    conn.write("Name: ___");
    // const id = setInterval(() => {
    //   conn.write("Move: right");

    // }, 50);
    // setTimeout(() => {
    //   clearInterval(id);
    // }, 5000);
  });

  conn.on("data", (data) => {
    console.log('data from server: ', data);
  });

  return conn;
};

module.exports = { connect };
