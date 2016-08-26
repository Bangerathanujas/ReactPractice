var React = require('react');
var MessageComponent = require('./MessageComponent');
var Messages=React.createClass({
  getHTMLPart: function(arr)
  {
   for(var x = 0; x <= arr.length; x++)
   {
     if(typeof arr[x].parts === 'undefined')
     {
       if(arr[x].mimeType === 'text/html')
       {
         return arr[x].body.data;
       }
     }
     else
     {
       return this.getHTMLPart(arr[x].parts);
     }
   }
   return '';
  },
render:function(){
  console.log(this.props.p2);
var that=this;
  var msg= this.props.p2.map(function(l){
    if(typeof l.payload.parts === 'undefined')
 {
   encodedBody = l.payload.body.data;
 }
 else
 {
   encodedBody = that.getHTMLPart(l.payload.parts);
 }



    var from,subject,date;
    // var bodyData;
    //
     bodyData=l.payload.body.data;
  //console.log(bodyData);
// var encodedBody=this.getHTMLPart(l.payload.body.data);
    for (var i = 0; i < l.payload.headers.length; i++) {
      if(l.payload.headers[i].name=="From"){
        from=l.payload.headers[i].value;
      }
      if(l.payload.headers[i].name=="Subject"){
        subject=l.payload.headers[i].value;
      }
      if(l.payload.headers[i].name=="Date"){
        date=l.payload.headers[i].value;
        console.log(date);
      }

    }

      return(
<MessageComponent from={from} subject={subject} date={date} bd={encodedBody} ></MessageComponent>
  );


});
  return(
    <div>
    {msg}
    </div>
  );
}
});
module.exports=Messages
