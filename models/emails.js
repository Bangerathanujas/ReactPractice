var mongoose=require('mongoose');

var Schema=mongoose.Schema;
 var emails=new Schema({
  from:String,
  subject:String,
  date:String,
  body:String
 })
 module.exports=mongoose.model('Emails',emails);
