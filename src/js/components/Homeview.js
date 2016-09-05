var React = require('react');
var Updatewindow=require('./Updatewindow');
var Homeview=React.createClass({
  getInitialState:function(){
    return({change:false,id:this.props.i});
  },
  changeStatus:function(){
    this.setState({change:true});
  },
  appendToIframe: function(message)
  {
  var iFrameNode = this.refs.myIframe,
  frameDoc = iFrameNode.contentWindow.document;
  frameDoc.write(message);
  },
  deleteMessage:function(){
      $.ajax({
        url: '/delete',
        dataType: 'json',

        type: 'DELETE',
data:this.state,
async:false,

        success: function(response)
        {
          //this.setState({status:response.message});
         console.log("hai deleted");


        }.bind(this),
        error: function(xhr, status, err) {
          console.error(err.toString());
        }.bind(this)
      });
    },
    render:function(){
  //console.log(this.props.b);
  return(
  <div className="modal fade" id="myHomeview">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close" data-dismiss="modal" onClick={this.props.c}>&times;</button>
          <h4 className="modal-title">{this.props.s}</h4>
        </div>

        <div className="modal-body" id="view">

          <form  className="form-horizontal">
            <div className="form-group">
              <div className="col-lg-12">

                <p>{this.props.s}</p>
                </div>
            </div>
            <div className="form-group">
              <div className="col-lg-12">
                <p>{this.props.f}</p>
              </div>
            </div>
            <iframe id="iframe-message" ref="myIframe" >
</iframe>
          </form>

        </div>
        <div className="modal-footer">

          <button className="btn btn-default" type="button" data-target="#myUpdatemodal" data-toggle="modal"  onClick={this.changeStatus}>Update</button>
          <button className="btn btn-default" type="button"   onClick={this.deleteMessage}>Delete</button>
  {this.state.change ? <Updatewindow to={this.props.f} subject={this.props.s} id={this.props.i} a={this.props.c} /> : null}
        </div>
      </div>

    </div>
  </div>
);
},
componentDidMount: function(){
var encodedBody = this.props.b;


this.appendToIframe(encodedBody);
},

});
module.exports=Homeview
