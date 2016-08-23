var React=require('react');


var GrandChild=React.createClass({
  render:function(){
    return(
      <div>
      <h1> Grand Content</h1>
      <h1>{this.props.c2}</h1>
      <h1>{this.props.c3}</h1>
      </div>
    );
  }
});
module.exports=GrandChild
