const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.149',
    port: 50541
  });
  conn.on('connect', (connect) => {
    console.log("Successfully connected to game server");
    conn.write("Name: PKP");
  })

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log(data)
  })
  
    
    /*setTimeout(() => {
      conn.write("Move: up");
    },1000);*/



  

  return conn;
}
module.exports = {connect};