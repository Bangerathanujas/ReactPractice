var React = require('react');
var Labelcomponent=React.createClass({

  render:function (){
    return(
      <div className="list-group-item">

<div className="container-fluid">
   <div className="row">
       <div className="col-lg-12">
  <button value={this.props.id}>{this.props.name}</button>
       </div>

   </div>
</div>
</div>

    );
  }
});
module.exports=Labelcomponent
