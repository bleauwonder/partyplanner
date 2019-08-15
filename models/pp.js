var orm = require("../config/orm.js");

var partyplan = {
    all: function(cb) {
      orm.all("plan", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.create("plan", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("plan", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("plan", condition, function(res) {
        cb(res);
      });
    }
  };

  module.exports = partyplan;
