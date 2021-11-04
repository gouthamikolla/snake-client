const {connect} = require('./client');

console.log("Connecting ...");
const conn = connect();
//console.log(conn);

conn.on("data", (data) => {
  // code that does something
  console.log(data.toString());
});
