var React = require('react');
var Message=require('./Message');
var Messagelist=React.createClass({

render:function(){
  //console.log(this.props.p2);

  var msg= this.props.arr.map(function(l){

       var from,subject,date,body;


        from=l.from;

        subject=l.subject;

        date=l.date;
        body=l.body;

        console.log(date);


      return(
<Message from={from} subject={subject} date={date} body={body} id={l._id} ></Message>
  );


},this);
  return(
    <div>
    {msg}
    </div>
  );
}
});
module.exports=Messagelist
