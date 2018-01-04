import React from "react";


export default class NotificationTest extends React.Component {

checkPerm(e){
  console.log("xxxxxxxxxxxxx " + e);
  e.preventDefault();
     if(!window.Notification){
       alert('Sorry Not supported');
     } else{
       Notification.requestPermission(function (p){
         console.log(p);
       });
     }
}

  requestPerm(e){
    console.log("inside requestPerm");;
    const dnperm=document.getElementById('dnperm');
    dnperm.addEventListener('click', this.checkPerm(e));
  }


  render() {
    return (
      <div>
<h1>WORKING</h1>
<p><a href='#' onClick={this.requestPerm.bind(this)} id='dnperm'>Request Permission</a></p>
<p><a href='#'>Trigger Notification</a></p>

      </div>


    );
  }
}
