var React = require('react');
var ComposeMail=React.createClass({
  getInitialState:function(){
    return({to:'',subject:'',message:''});
  },
  handleTo:function(event){
    this.setState({to:event.target.value});
  },
  handleSubject:function(event){
    this.setState({subject:event.target.value});
  },
  handleMessage:function(event){
    this.setState({message:event.target.value});
  },
submitData:function(){
//  var msg=''+this.state.to+this.state.subject+this.state.message;
  var accessToken = localStorage.getItem('gToken');
console.log("Access token: "+accessToken);
var email = '';
var Headers = {'To': this.state.to,'Subject': this.state.subject};
for(var header in Headers)
{
  email += header += ": "+Headers[header]+"\r\n";
  console.log("email---"+email);
  console.log("header---"+header);
  console.log("Headers[header]---"+Headers[header]);
 }
email += "\r\n" + this.state.message;
console.log("constructed email: " +email);
var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
$.ajax({
       url: 'https://www.googleapis.com/gmail/v1/users/thanuja.s94%40gmail.com/messages/send?key={AIzaSyDoBcnEkXMkHak7dm2dS_1WqjhfOGCFl8M}',
       dataType: 'json',
       contentType: "application/json",
       type: 'POST',
       data: JSON.stringify({'raw': encodedMessage}),
       beforeSend: function (request)
       {
         request.setRequestHeader("Authorization", "Bearer "+accessToken);
       },
 success: function(data)
 {
   console.log("Success");
 }.bind(this),
 async: false,
 error: function(xhr, status, err) {
   console.error("Error.."+err.toString());
 }.bind(this)
})
},

  render:function (){
    return(
      <div>
      <a href="#myModal" role="button" className="btn btn-danger " data-toggle="modal"  id="modal">Compose</a>

      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">New Messages</h4>
            </div>

            <div className="modal-body">

              <form  className="form-horizontal">
                <div className="form-group">
                  <div className="col-lg-12">
                    <input className="form-control" id="To"  placeholder="To" type="email" onChange={this.handleTo}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <input className="form-control" id="Subject"  placeholder="Subject" type="text" onChange={this.handleSubject}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <textarea className="form-control" id="Message"  placeholder="Message" row="30" onChange={this.handleMessage}></textarea>
                  </div>
                </div>
              </form>

            </div>
            <div className="modal-footer">

              <button className="btn btn-default" type="button" data-dismiss="modal" onClick={this.submitData}>Send</button>
            </div>
          </div>

        </div>
      </div>
</div>
    );
  }
});
module.exports=ComposeMail
