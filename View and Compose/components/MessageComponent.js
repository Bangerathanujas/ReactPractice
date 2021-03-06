var React = require('react');
var Modalwindow=require('./Modalwindow');
var MessageComponent=React.createClass({
getInitialState:function(){
  return({status:false});
},
changeStatus:function(){
  this.setState({status:true});
},
  render:function (){
    console.log(this.props.bd);
    return(
      <div className="list-group-item">

      <div className="container-fluid">
         <div className="row">
             <div className="col-lg-4">
        {this.props.from}
             </div>
             <div className="col-lg-4">
          <a href="#myViewModal" data-toggle="modal" data-target="#myViewModal"  onClick={this.changeStatus}>  {this.props.subject} </a>
          {this.state.status ? <Modalwindow b={this.props.bd} f={this.props.from} s={this.props.subject}/> : null}
             </div>
             <div className="col-lg-4">
           {this.props.date}
             </div>
         </div>
      </div>
  </div>

    );
  }
});
module.exports=MessageComponent
