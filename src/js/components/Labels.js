var React = require('react');
var Labelcomponent = require('./Labelcomponent');
var ComposeMail=require('./ComposeMail');

var Labels=React.createClass({
  handleClick:function(label){
    console.log("inside label");
    this.props.p3(label);
  },

render:function(){

  var lbl= this.props.p1.map(function(l){

var id,name;

  if(l.id=="INBOX" || l.id=="IMPORTANT" || l.id=="SENT" || l.id=="DRAFT" ){
    id=l.id;
    name=l.name;
    return(

      <Labelcomponent id={id} name={name} cli={this.handleClick}></Labelcomponent>

    );
  }




    },this);
  return(
    <div>
<ComposeMail></ComposeMail>
    {lbl}
    </div>
  );
}
});
module.exports=Labels
