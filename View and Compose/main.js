var React = require('react');
var ReactDOM = require('react-dom');

var GmailBox= require('./components/GmailBox');

var json1={
 "labels": [
  {
   "id": "CATEGORY_PERSONAL",
   "name": "CATEGORY_PERSONAL",
   "type": "system"
  },
  {
   "id": "Label_4",
   "name": "Work",
   "messageListVisibility": "show",
   "labelListVisibility": "labelHide",
   "type": "user"
  },
  {
   "id": "Label_1",
   "name": "Personal",
   "type": "user"
  },
  {
   "id": "CATEGORY_SOCIAL",
   "name": "CATEGORY_SOCIAL",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "IMPORTANT",
   "name": "IMPORTANT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "Label_3",
   "name": "Travel",
   "type": "user"
  },
  {
   "id": "CATEGORY_UPDATES",
   "name": "CATEGORY_UPDATES",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "CATEGORY_FORUMS",
   "name": "CATEGORY_FORUMS",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "CHAT",
   "name": "CHAT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "SENT",
   "name": "SENT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "INBOX",
   "name": "INBOX",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "TRASH",
   "name": "TRASH",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "CATEGORY_PROMOTIONS",
   "name": "CATEGORY_PROMOTIONS",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "DRAFT",
   "name": "DRAFT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SPAM",
   "name": "SPAM",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "STARRED",
   "name": "STARRED",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "UNREAD",
   "name": "UNREAD",
   "type": "system"
  },
  {
   "id": "Label_2",
   "name": "Receipts",
   "messageListVisibility": "show",
   "labelListVisibility": "labelHide",
   "type": "user"
  }
 ]
}
 var labelarr=[];
 for (var i = 0; i < json1.labels.length; i++) {

  if( json1.labels[i].type=="system"){
    labelarr.push({id:json1.labels[i].id,name:json1.labels[i].name});
  }
 }

 var MainComponent=React.createClass({

   render:function(){



     return(


       <GmailBox/>

     );
   }

 });
ReactDOM.render(<MainComponent/>,document.getElementById('mail'));
