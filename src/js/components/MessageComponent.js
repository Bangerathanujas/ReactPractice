var React = require('react');
var Modalwindow=require('./Modalwindow');
var MessageComponent=React.createClass({
getInitialState:function(){
  return({status:false});
},
changeStatus:function(){
  this.setState({status:true});
},
setStatus:function(){
  this.setState({status:false});
},

  render:function (){
  
    return(
      <div className="list-group-item">

      <div className="container-fluid">
         <div className="row">
             <div className="col-lg-4">
        {this.props.from}
             </div>
             <div className="col-lg-4">
          <a href="#myViewModal" data-toggle="modal" data-target="#myViewModal"  onClick={this.changeStatus}>  {this.props.subject}{this.props.status} </a>
          {this.state.status ? <Modalwindow b={this.props.bd} f={this.props.from} s={this.props.subject} d={this.props.date} c={this.setStatus}/> : null}
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
