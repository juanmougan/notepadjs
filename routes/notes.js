var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("GET /notes");
  Note.find(function(err, notes) {
    if (err) {
      res.send(err);
    }
    res.json(notes);
  });
});

router.post('/', function(req, res, next) {
  console.log("POST /notes");
  res.json({ title: 'Will create a note' });
});

router.get('/:note_id', function(req, res, next) {
  console.log("GET /notes");
  res.json({ title: 'Note with ID: ' + req.params.note_id });
});

router.put('/:note_id', function(req, res, next) {
  console.log("PUT /notes");
  res.json({ title: 'Will update note with ID: ' + req.params.note_id });
});

router.delete('/:note_id', function(req, res, next) {
  console.log("DELETE /notes");
  res.json({ title: 'Will delete note with ID: ' + req.params.note_id });
});

module.exports = router;
