var React=require('react');
var Messagelist=require('./Messagelist');
var Home=React.createClass({
getInitialState:function(){
  return({status:'Initial',favMessages:[]});
},
/*viewMessage:function(){
    $.ajax({
      url: 'http://localhost:8080/view',
      type: 'GET',
      success: function(response)
      {
        this.setState({status:response});
       console.log(response);


      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
    });
},*/
updateMessage:function(){
    $.ajax({
      url: '/update',
      dataType: 'json',
      contentType:'application/json',
      type: 'PUT',

     async:false,
      success: function(response)
      {
        this.setState({status:response.message});
       console.log(response.message);


      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
    });
  },
  
render:function(){
  console.log(this.state.favMessages);
    return(<div>
      <h2>
      {this.state.status}
      </h2>

      <button className="btn btn-default" type="button"   onClick={this.updateMessage}>update</button>
      <button className="btn btn-default" type="button"   onClick={this.deleteMessage}>delete</button>
      <Messagelist arr={this.state.favMessages}/>
</div>
   );
 },
 componentDidMount:function(){
   $.ajax({
     url: 'http://localhost:8080/view',
     type: 'GET',
     dataType: 'json',
     success: function(response)
     {
      //  this.setState({status:response});


      console.log(response);
      this.setState({favMessages:response});
       console.log(this.state.favMessages);

     }.bind(this),
     error: function(xhr, status, err) {
       console.error(err.toString());
     }.bind(this)
   });
 },
});
module.exports=Home
