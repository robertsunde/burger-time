const orm = require(`../config/orm`)

const burger = {
    all(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },

    create(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
    deleteOne(condition, cb) {
      orm.delete('burgers', condition, (res) => cb(res));
    },
  };
  

  module.exports = burger;