import React from "react";


export default class Notification extends React.Component {
  constructor(){
    super();
    this.state={
      loadTime: new Date(),
      support: false
    };
  }



componentDidMount(){
  console.log("Component Mounted");
  this.setState({support:this.checkSupport()});
}


checkSupport(){
    if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}


checkPerm(e){
  console.log("xxxxxxxxxxxxx " + e);
  e.preventDefault();
     if(!window.Notification){
       alert('Sorry Not supported');
     } else{
       window.Notification.requestPermission(function (p){
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
<h1>Loaded at : {this.state.loadTime.toString()}</h1>
<p><a href='#' onClick={this.requestPerm.bind(this)} id='dnperm'>Request Permission</a></p>
<p><a href='#'>Trigger Notification</a></p>

      </div>


    );
  }
}
