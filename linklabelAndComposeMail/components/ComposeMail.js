var React = require('react');
var ComposeMail=React.createClass({

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
                    <input className="form-control" id="To"  placeholder="To" type="email"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <input className="form-control" id="Subject"  placeholder="Subject" type="text"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <textarea className="form-control" id="Message"  placeholder="Message" row="20"></textarea>
                  </div>
                </div>
              </form>

            </div>
            <div className="modal-footer">

              <button className="btn btn-default" type="button">Send</button>
            </div>
          </div>

        </div>
      </div>
</div>
    );
  }
});
module.exports=ComposeMail
