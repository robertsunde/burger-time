//CONTAINS CODE FOR LINKING JS TO MYSQL WORKBENCH
//////////////////////////////////////////////////////////////////
const mysql = require(`mysql`);
const connection = mysql.createConnection(process.env.JAWSDB_URL);

//will display error when connecting, if any.
connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });

//module.exports here.
module.exports = connection;
