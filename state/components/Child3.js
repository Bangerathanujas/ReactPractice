var React=require('react');
var GrandChild=require('./GrandChild.js');

var Child3=React.createClass({
  render:function(){
    return(
      <div>
      <h1>Content</h1>
      <h1>{this.props.c1}</h1>
      <GrandChild c2={this.props.c1} c3="data3"></GrandChild>
      </div>
    );
  }
});
module.exports=Child3
