var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("GET /notes");
  res.send(JSON.stringify({ title: "Sample note" }));
});

module.exports = router;
