var mongoose = require('mongoose');
//schema
var Schema = mongoose.Schema;
var NoteSchema = new Schema({
  title: {
    type:String
  },
  body: {
    type:String
  }
});

//export note
var Note = mongoose.model('Note', NoteSchema);
module.exports = Note;