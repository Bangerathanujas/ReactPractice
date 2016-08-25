var React = require('react');
var MessageComponent = require('./MessageComponent');
var Messages=React.createClass({

render:function(){
  console.log(this.props.p2);
  var msg= this.props.p2.map(function(l){

    var from,subject,date;
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
<MessageComponent from={from} subject={subject} date={date}  ></MessageComponent>
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
