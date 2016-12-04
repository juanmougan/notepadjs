var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NoteSchema   = new Schema({
  title: String,
  body: String
},
{
  timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
