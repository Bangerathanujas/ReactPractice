var React=require('react');
var ReactDOM=require('react-dom');

var Nav1=require('./components/Nav1.js');
var Child2=require('./components/Child2.js');
var Child3=require('./components/Child3.js');
var Footer1=require('./components/Footer1.js');

var MainComponent=React.createClass({
  render:function(){
    return(
      <div>
      <div className="row">
      <div className="col-12">
      <Nav1>hai</Nav1>
      </div>
      </div>
      <div className="row">
      <div className="col-2">
      <Child2></Child2>
       </div>
       <div className="col-8">
       <Child3  c1="data1"></Child3>
        </div>
       </div>
       <div className="row">
       <div className="col-12">
       <Footer1></Footer1>
       </div>
       </div>
      </div>
    );
  }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app'));
