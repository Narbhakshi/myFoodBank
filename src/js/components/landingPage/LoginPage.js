import React from "react";


import LoginHandler from "./LoginHandler";



let loading=false;
//let submitButtonClass = "login__submit";

export default class LoginPage extends React.Component {

  constructor(){
    super();
    this.state={
      demoClass:"demo",
      userName:null,
      userPassword: null,
      submitButtonClass:"login__submit",
      loginFormUrl: "http://localhost:8080/backend.server/myresource/loginForm",
      loginData:"",
      loading:false,
    };
  }


  setUserName(e){
    const userNameEntered = e.target.value;
    this.setState({userName:userNameEntered});
  }

  setPassword(e){
    const userPasswordEntered = e.target.value;
    this.setState({userPassword:userPasswordEntered});
  }


  signUp(e){
    alert("Signing you up"); //TODO remove it
  }
  signIn(e){
    const isFilled = this.state.userName && this.state.userPassword;
    if (!isFilled){
      alert("Form not filled");
    }else{
      console.log("inside filled form logging in");
      this.setState({submitButtonClass:"login__submit processing"});
      setTimeout(() =>{
        this.submitLoginForm();
      }, 2000);

    }//else
  }//signion endS



submitLoginForm(){
  const loginData = "?userName=" + this.state.userName
                    +"&userPassword=" + this.state.userPassword;
  $.ajax({
    url: this.state.loginFormUrl + loginData,
    type: "GET",
    data: "",
    contentType: "application/json",
    beforeSend: this.setHeaders,
    dataType: "json",
    success: function(data, textStatus, request) {
      this.displayResult(data, textStatus, request);
    }.bind(this),
    error: function(data, textStatus, request){
      this.onFailureResponse(data, textStatus, request);
    }.bind(this)
  })

}

setHeaders(){
  console.log("inside setHeaders");;
}
onFailureResponse(data, textStatus, request){
  alert("Oops! Something went wrong. We are working on it.");
  this.setState({submitButtonClass : "login__submit"});

}
displayResult(data, textStatus, request){
  this.setState({submitButtonClass : "login__submit"});
  this.setState({loginData:data});
  if(data.result==="OK"){
    console.log("SUCCESSFUL LOGIN");
    const loginForm = document.getElementById('demo');
    this.setState({demoClass:"demo ripple"});
    setTimeout(() =>{
      this.props.history.push("/testChart");
    }, 700);
  }else{
    console.log("LOGIN FAILED");
  }



}

  render() {
    return (
      <div class="loginapp">
      <div class="cont">
      <div class={this.state.demoClass}>
        <div class="login">
          <div class="login__check"></div>
          <div class="login__form">
            <div class="login__row">
              <svg class="login__icon name svg-icon" viewBox="0 0 20 20">
                <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
              </svg>
              <input type="text" class="login__input name" name="loginPageUserName"
              onBlur={this.setUserName.bind(this)}id="loginPageUserName" placeholder="Username" required/>
            </div>
            <div class="login__row">
              <svg class="login__icon pass svg-icon" viewBox="0 0 20 20">
                <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
              </svg>
              <input type="password" class="login__input pass" name="loginPagePassword"
              onBlur={this.setPassword.bind(this)} placeholder="Password" id="loginPagePassword" required/>
            </div>
            <button type="submit" class={this.state.submitButtonClass} id="loginButton"
            onClick={this.signIn.bind(this)}>Sign in</button>
            <p class="login__signup">Dont have an account? &nbsp;
            <a onClick={this.signUp.bind(this)} href="#">Sign up</a></p>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
