var express = require("express");

var router = express.Router();

var pp = require("../models/pp.js");

// Create all routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    pp.all(function(data) {
      var hbsObject = {
        plan: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/partyplan", function(req, res) {
      console.log(req.body)
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
  
    console.log(req.body);
    console.log("condition", condition);
  
    pp.update({
      completed: req.body.completed
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
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
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;