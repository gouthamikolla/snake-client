const {connect} = require('./client');
const { setupInput } = require("./input");
const conn = connect();
const handleEvents = () => {
  // code that does something
  //console.log("Successfully connected to game server");
  conn.write("Name: GK");
  setInterval(() => {
    //conn.write("Move: up");
  },50);

  setTimeout(() => {
    setInterval(() => {
      //conn.write("Move: left");
    },51);
  },200);

  setTimeout(() => {
    setInterval(() => {
      // conn.write("Move: right");
    },52);
  },800);

  //1.
  //conn.write("Name: GK");
  //conn.write("Move: up");
  //conn.write("Move: up");
  //conn.write("Move: up");

  //2.

  /*conn.write("Name: GK");
  setTimeout(() => {
    conn.write("Move: up");
  },50);
  setTimeout(() => {
    conn.write("Move: up");
  },50);
  setTimeout(() => {
    conn.write("Move: up");
  },50); */

  //3.

  //conn.write("Name: GK");
  /* setInterval(() => {
    //conn.write("Move: up");
  },50); */
};
// setup interface to handle user input from stdin


setupInput();
conn.on("connect", handleEvents);

