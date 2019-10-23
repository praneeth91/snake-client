let connection; 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data",handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
}
const handleUserInput = function(data){
  if (data === "\u0003"){
    process.exit();
  } else if (data ==="w"){
   connection.write("Move: up");
    //console.log("Move up");
  } else if (data ==="a"){
    connection.write("Move: left");
    //console.log("Move left");
  } else if (data ==="s"){
    connection.write("Move: down");
    //console.log("Move right");
  } else if (data ==="d"){
    connection.write("Move: right");
    //console.log("Move down");
  }
}
module.exports = {setupInput};

