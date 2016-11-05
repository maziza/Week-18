var mongoose = require('mongoose');

//create schema
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
  title: {
    type:String,
    required:true
  },
  link: {
    type:String,
    required:true
  },
  
  //save object id of note
  note: {
      type: Schema.Types.ObjectId,
      ref: 'Note'
  }
});

// create model and export
var Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;