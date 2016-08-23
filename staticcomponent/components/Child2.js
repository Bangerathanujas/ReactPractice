var React=require('react');

var Child2=React.createClass({
  render:function(){
    return(
    <div>
    <h1>{this.props.p1}</h1>
    <p>{this.props.p2}</p>
    </div>
  );
  }
});
module.exports=Child2
