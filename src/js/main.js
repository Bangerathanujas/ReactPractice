var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory,Route,Router,IndexRoute}=require('react-router');
var GmailBox= require('./components/GmailBox');
var Home= require('./components/Home');
var AboutUs= require('./components/AboutUs');
var Navbar= require('./components/Navbar');



 var MainComponent=React.createClass({

   render:function(){



     return(
<div>

       <Navbar/>
<br/>
<h1>   heloo</h1>
{this.props.children}
</div>
     );
   }

 });
ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={MainComponent}>
    <IndexRoute  component={Home}/>
  <Route path="/home" component={Home}/>
  <Route path="/gmailbox" component={GmailBox}/>
  <Route path="/aboutus/:aboutname" component={AboutUs}/>
  </Route>
  </Router>
  ,document.getElementById('mail'));
