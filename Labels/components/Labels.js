var React = require('react');
var Labelcomponent = require('./Labelcomponent');
var Labels=React.createClass({

render:function(){
  var lbl= this.props.p1.map(function(l){
      return(

        <Labelcomponent id={l.id} name={l.name}></Labelcomponent>

      );
    });
  return(
    <div>
    {lbl}
    </div>
  );
}
});
module.exports=Labels
