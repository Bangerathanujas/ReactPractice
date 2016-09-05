var React = require('react');
var Homeview=require('./Homeview');
var Message=React.createClass({
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
    //console.log(this.props.bd);
    return(
      <div className="list-group-item">

      <div className="container-fluid">
         <div className="row">
             <div className="col-lg-4">
        {this.props.from}
             </div>
             <div className="col-lg-4">
          <a href="#myHomeview" data-toggle="modal" data-target="#myHomeview" onClick={this.changeStatus}>  {this.props.subject} </a>
          {this.state.status ? <Homeview b={this.props.body} f={this.props.from} s={this.props.subject} i={this.props.id} d={this.props.date} c={this.setStatus}/> : null}
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
module.exports=Message
