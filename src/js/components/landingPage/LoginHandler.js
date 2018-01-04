import React from "react";


export default class LoginHandler extends React.Component {
  constructor(){
    super();
    this.state={
      loginUserName: "",
      loginPassword: "",
    };
  }




  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
   doLogin(loginUserName, loginPassword){
     this.setState({
       loginUserName:loginUserName,
       loginPassword:loginPassword,
     });
     console.log(this.state.loginPassword);
     console.log(this.state.loginUserName);

   }





  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <h1>Shahrukh is King</h1>
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
