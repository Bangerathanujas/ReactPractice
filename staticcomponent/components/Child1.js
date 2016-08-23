var React=require('react');

var Child1=React.createClass({
  changeContent:function(event){
    console.log("Triggered by: "+event.target.value);
    if(event.target.value=='Home'){
      this.props.p3('Home','This is home');
    }
  else  if(event.target.value=='AboutUs'){
      this.props.p3('About','This is About');
    }
  else  if(event.target.value=='ContactUs'){
      this.props.p3('Contact','This is Contact');
    }
  },
  render:function(){
    return(
    <div>
    <button onClick={this.changeContent} value="Home">Home</button><br/>
    <button  onClick={this.changeContent} value="AboutUs">AboutUs</button><br/>
    <button onClick={this.changeContent} value="ContactUs">ContactUs</button><br/>
    </div>
  );
  }
});
module.exports=Child1
