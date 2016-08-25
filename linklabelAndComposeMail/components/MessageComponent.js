var React = require('react');
var MessageComponent=React.createClass({

  render:function (){
    return(
      <div className="list-group-item">

      <div className="container-fluid">
         <div className="row">
             <div className="col-lg-4">
        {this.props.from}
             </div>
             <div className="col-lg-4">
           {this.props.subject}
             </div>
             <div className="col-lg-4">
          <a href="#"  >  {this.props.date} </a>
             </div>
         </div>
      </div>
  </div>
    );
  }
});
module.exports=MessageComponent
