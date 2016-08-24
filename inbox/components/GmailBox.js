var React = require('react');
var Labels= require('./Labels');
var Messages= require('./Messages');
var loadedData = false;
var GmailBox = React.createClass({
  getInitialState: function()
  {
    return({allLabelsData:[],allMessages:[]});
  },
  gmailLogin: function()
  {
    var acToken, tokenType, expiresIn;
    var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
    var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
    var CLIENTID    =   '543968976161-pfch36moc41s3067qvrfgbjubtk6odff.apps.googleusercontent.com';
    var REDIRECT    =   'http://localhost:8080';
    var TYPE        =   'token';
    var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
    var win         =   window.open(_url, "windowname1", 'width=800, height=600');

    var pollTimer   =   window.setInterval(function()
    {

      try
      {
        if (win.document.URL.indexOf(REDIRECT) != -1)
        {
          window.clearInterval(pollTimer);
          var url =   win.document.URL;
          acToken =   gup(url, 'access_token');
          tokenType = gup(url, 'token_type');
          expiresIn = gup(url, 'expires_in');
          localStorage.setItem('gToken',acToken);
          localStorage.setItem('gTokenType',tokenType);
          localStorage.setItem('gExprireIn',expiresIn);
          function gup(url, name) {
            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regexS = "[\\#&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( url );
            if( results == null )
            return "";
            else
            return results[1];
          }
          win.close();
        }
      }
      catch(e)
      {
        console.log(e);
      }
    }, 500);
    this.allLabels();
    this.getEmailByLabels();

  },


  allLabels: function()
  {
    var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyDoBcnEkXMkHak7dm2dS_1WqjhfOGCFl8M}',
      dataType: 'json',
      type: 'GET',
      async:false,
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
console.log(data);
        this.setState({allLabelsData:data.labels});
        loadedData=true;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
    });

  },
  getEmailByLabels:function(){
var accessToken = localStorage.getItem('gToken');
    $.ajax({
      url:'https://www.googleapis.com/gmail/v1/users/me/messages?labelIds=INBOX&maxResults=10&key={AIzaSyDoBcnEkXMkHak7dm2dS_1WqjhfOGCFl8M}',
      dataType:'json',
      type:'GET',
      async:false,
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success:function(data1){
        //console.log(data1);
        var temp=data1.messages;
    //   console.log(temp);
        for (var i = 0; i < temp.length; i++) {
          console.log(temp[i].id);
      this.SpecificMessages(temp[i].id);

        }

      }.bind(this),
      error:function(xhr,status,err){
        console.error(err.toString());
      }.bind(this)
    });
  },
  SpecificMessages:function(id){
    // console.log(id)
    var accessToken=localStorage.getItem('gToken');
    //console.log('Access Token  '+accessToken);
      $.ajax({
      url:'https://www.googleapis.com/gmail/v1/users/me/messages/'+id+'?key={AIzaSyDoBcnEkXMkHak7dm2dS_1WqjhfOGCFl8M}',
      dataType:'json',
      type:'GET',
      async:false,
      beforeSend:function(request){
        request.setRequestHeader("Authorization","Bearer "+accessToken);
      },
      success:function(data2){
        //console.log(data2);
        this.state.allMessages.push(data2);
      }.bind(this),
      error:function(xhr,status,err){
        console.error(err.toString());
      }.bind(this)
    });
  },

  render:function()
  {
    var leftPanel;
    var rightPanel;
//console.log(this.state.allMessages);
    if(loadedData){
      leftPanel =  <Labels p1={this.state.allLabelsData}></Labels>
      rightPanel=<Messages p2={this.state.allMessages}></Messages>
    }

    return(
      <div className="GmailBox">
      <div className="container-fluid">
      <div className="row">
      <div className="col-lg-1">
      <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-primary pull-left">logIn</button>
      </div>
      <div className="col-lg-8 pull-right">
      <h2>ReactMails</h2>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-2">
      {leftPanel}
      </div>
      <div className="col-lg-10">
      {rightPanel}
      </div>
      </div>
      </div>
      </div>
    );
  }
});

module.exports = GmailBox;
