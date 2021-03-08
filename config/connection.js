//////////////////////////////////////////////////////////////////
//CONTAINS CODE FOR LINKING JS TO MYSQL WORKBENCH
//////////////////////////////////////////////////////////////////
const mysql = require(`mysql`);
// const connection = mysql.createConnection({
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
// port used in mysql for burgers_db
port: 3306,

// username
user: `root`,

//password specific to this class for safety of data.
password: `yourRootPassword`,
database: `burgers_db`,
})
};


//will display error when connecting, if any.
// connection.connect((err) => {
//     if (err) {
//       console.error(`error connecting: ${err.stack}`);
//       return;
//     }
//     console.log(`connected as id ${connection.threadId}`);
  // });

//module.exports here.
connection.connect();
module.exports = connection;