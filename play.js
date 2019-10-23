const connect = require('./client');
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
 const handleUserInput = function(data){
    if (data === "\u0003"){
      process.exit();
    }
  }
  stdin.on(handleUserInput(data));
  return stdin;
}
console.log('Connecting ...');
connect();