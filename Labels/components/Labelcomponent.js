var React = require('react');
var Labelcomponent=React.createClass({

  render:function (){
    return(
<div>
   <button value={this.props.id}>{this.props.name}</button>
   </div>
    );
  }
});
module.exports=Labelcomponent
