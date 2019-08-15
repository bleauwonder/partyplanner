var express = require("express");
var router = express.Router();
var pp = require("../models/pp.js");

  router.get("/", function(req, res) {
    pp.all(function(data) {
      var hbsObject = {
        plan: data
      };
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/partyplan", function(req, res) {
    pp.create([
      "task", "completed"
    ], [
      req.body.name, req.body.completed
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/partyplan/:id", function(req, res) {
    var condition = "id = " + req.params.id;  
    pp.update({
      completed: req.body.completed
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/partyplan/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    pp.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  module.exports = router;