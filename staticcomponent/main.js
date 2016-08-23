var React=require('react');
var ReactDOM=require('react-dom');

var Nav1=require('./components/Nav1.js');
var Child1=require('./components/Child1.js');
var Child2=require('./components/Child2.js');
var Footer1=require('./components/Footer1.js');

var MainComponent=React.createClass({
  getInitialState:function()
  {
    return(
      {title:'Home',
      description:'Lorem'}
    );
  },
  handleClick:function(title,dsc){
    this.setState({title:title,description:dsc})
 },
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
      <Child1 p3={this.handleClick}></Child1>

       </div>
       <div className="col-8">
       <Child2  p1={this.state.title} p2={this.state.description}></Child2>

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
