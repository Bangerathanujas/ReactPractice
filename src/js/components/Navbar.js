var React=require('react');
var {Link}=require('react-router');
var Navlink=require('./Navlink');
var Navbar=React.createClass({
  render:function(){
    return(
    <div className="container-fluid" >
    <ul className="nav navbar-nav">
    <li><Navlink to="/home">Home</Navlink></li>
    <li><Navlink to="/gmailbox">Gmail1</Navlink></li>
    <li><Navlink to="/aboutus/react">About React</Navlink></li>
    <li><Navlink to="/aboutus/router">About router</Navlink></li>
    </ul>
    </div>
    );
  }
});
module.exports=Navbar
