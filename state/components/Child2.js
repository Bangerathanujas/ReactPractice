var React=require('react');


var Child2=React.createClass({
  render:function(){
    console.log("inside child2"+{this.props.pass});
    return(
      <div>
      <h1>Aside</h1>
      <h1>{this.props.pass}</h1>
      </div>
    );
  }
});
module.exports=Child2
