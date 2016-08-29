var React = require('react');
var Labelcomponent=React.createClass({
changeContent:function(){
console.log("inside label");
    this.props.cli(this.props.id);

},
  render:function (){
    return(
      <div className="list-group-item">

<div className="container-fluid">
   <div className="row">
       <div className="col-lg-12">
    <button className="btn btn-primary btn-group-justified btn-md" onClick={this.changeContent}>{this.props.name}</button>
       </div>

   </div>
</div>
</div>

    );
  }
});
module.exports=Labelcomponent
