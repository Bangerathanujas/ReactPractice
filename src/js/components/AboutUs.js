var React=require('react');
var AboutUs=React.createClass({
  render:function(){
    return(
      <h2>
      this is about {this.props.params.aboutname}
      </h2>
    );
  }
});
module.exports=AboutUs
