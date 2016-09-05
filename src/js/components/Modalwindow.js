var React = require('react');
var Replywindow=require('./Replywindow');
var Modalwindow=React.createClass({
  getInitialState:function(){
    return({change:false,date:this.props.d,from:this.props.f,subject:this.props.s,body:this.props.b});
  },
  changeStatus:function(){
    this.setState({change:true});
  },
  saveMessage:function(){
    //var accessToken = localStorage.getItem('gToken');
    var date=this.state.date;
    var from=this.state.from;
    var subject=this.state.subject;

    // var body=this.state.body;
    var encodedBody = this.state.body;

   encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
   encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
  //  console.log(body);
    // var email = '';
    // var Headers = {'To': this.state.to,'Subject': this.state.subject};
    // for(var header in Headers)
    // {
    // email += header += ": "+Headers[header]+"\r\n";
    // console.log("email---"+email);
    // console.log("header---"+header);
    // console.log("Headers[header]---"+Headers[header]);
    // }
    // email += "\r\n" + this.state.message;
    // console.log("constructed email: " +email);
    // var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
    $.ajax({
         url: '/save',
         dataType: 'json',
         contentType: "application/json",
         type: 'POST',
         data: JSON.stringify({'from':from,subject: subject,'date':date,'body':encodedBody}),
        //  beforeSend: function (request)
        //  {
        //    request.setRequestHeader("Authorization", "Bearer "+accessToken);
        //  },
    success: function(data)
    {
     console.log("Success");
console.log(data);
    }.bind(this),
    async: false,
    error: function(xhr, status, err) {
     console.error("Error.."+err.toString());
    }.bind(this)
    })
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
          <button className="btn btn-default" type="button"   onClick={this.saveMessage}>Save</button>
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
console.log(encodedBody);
},

});
module.exports=Modalwindow
