var React = require('react');
var Modalwindow=React.createClass({
  appendToIframe: function(message)
{
var iFrameNode = this.refs.myIframe,
frameDoc = iFrameNode.contentWindow.document;
frameDoc.write(message);
},
render:function(){
  console.log(this.props.b);
  return(
  <div className="modal fade" id="myViewModal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">{this.props.s}</h4>
        </div>

        <div className="modal-body">

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

          <button className="btn btn-default" type="button" >Reply</button>
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
