const connection = require(`./connection`);



///////////////////////////////////////////////////////////////////
// contains orm functions and callbacks
///////////////////////////////////////////////////////////////////

const orm = {
  selectAll(tableInput, cb) {
    const mySQLdata = `SELECT * FROM ${tableInput};`;
    connection.query(mySQLdata, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  ///////////////////////////////////////////////////////////////////
  // sql function for adding to "burgers" table
  ///////////////////////////////////////////////////////////////////
  insertOne(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },


  ///////////////////////////////////////////////////////////////////
  // sql function for deleting from "burgers" table
  ///////////////////////////////////////////////////////////////////
  deleteOne(table, condition, cb) {
    let mySQLdata = `DELETE FROM ${table} WHERE ` + condition;

    connection.query(mySQLdata, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },


  ///////////////////////////////////////////////////////////////////
  // sql function for switching burgers from true/false from "burgers" table
  ///////////////////////////////////////////////////////////////////
  updateOne(table, objColVals, condition, cb) {
    let mySQLdata = `UPDATE ${table} SET ` + objToSql(objColVals) + ` WHERE ` + condition;

    console.log(mySQLdata);
    connection.query(mySQLdata, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};




const printQuestionMarks = (num) => {
  const question = [];

  for (let i = 0; i < num; i++) {
    question.push('?');
  }

  return question.toString();
};

const objToSql = (ob) => {
  const question = [];


  for (const key in ob) {
    let value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }

      question.push(`${key}=${value}`);
    }
  }

  return question.toString();
};

module.exports = orm;