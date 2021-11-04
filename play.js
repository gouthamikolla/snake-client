const {connect} = require('./client');
const conn = connect();
const handleEvents = () => {
  // code that does something
  //console.log("Successfully connected to game server");
  conn.write("Name: GKP");
};

conn.on("connect", handleEvents);
