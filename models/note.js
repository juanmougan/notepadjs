var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var db = mongoose.connection;
db.once('open', function (callback) {
    const NoteSchema   = new Schema({
	  title: String,
	  body: String
	},
	{
	  timestamps: true
	});
	var Note = mongoose.model('Note', NoteSchema);
    module.exports = Note;
});
