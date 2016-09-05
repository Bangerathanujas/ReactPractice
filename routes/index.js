var express = require('express');
var Email=require('../models/emails');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/save',function(req,res){
  console.log(req.body);
  console.log('hai');

var email=new Email(req.body);
email.save(function(err,success){
if(err){
  console.log("error in storing");
}
else {
  console.log("data saved");
}
});
res.json(req.body);
});


router.get('/view',function(req,res,next){
  console.log("inside get");
//res.send({message:"hello its get"});
Email.find(function(err,allData){
  if(err){
    console.log("error ");
  }
  else{
    res.send(allData);
  }
});
});

router.put('/update',function(req,res,next){
  console.log('hai');
  console.log(req.body.id);
 Email.findOne( {'_id' : req.body.id }, function(err, updateData){
   if(err){
     console.log(err);

   }else{
console.log(updateData.subject);
  updateData.subject=req.body.subject;
  console.log(updateData.subject);
  updateData.save(function(err,success){
  if(err){
    console.log("error in storing");
  }
  else {
    console.log("data saved");
  }


});
}
});
});
router.delete('/delete',function(req,res,next){
Email.remove({_id:req.body.id},function(err,data){
  if(err){
    console.log(err);
  }
  else{
  console.log("deleted");
  }
});

});



module.exports = router;
