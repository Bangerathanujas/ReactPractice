var React = require('react');
var Replywindow=require('./Replywindow');
var Modalwindow=React.createClass({
  getInitialState:function(){
    return({change:false});
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
render:function(){
  //console.log(this.props.b);
  return(
  <div className="modal fade" id="myViewModal">
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

          <button className="btn btn-default" type="button" data-target="#myReplyModal" data-toggle="modal"  onClick={this.changeStatus}>Reply</button>
        {this.state.change ? <Replywindow to={this.props.f} subject={this.props.s} a={this.props.c}/> : null}
        </div>
      </div>

    </div>
  </div>
);
},
componentDidMount: function(){
var encodedBody = this.props.b;

encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
this.appendToIframe(encodedBody);
},

});
module.exports=Modalwindow
