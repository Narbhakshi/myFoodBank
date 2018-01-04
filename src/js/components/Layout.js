import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import LoginPage from "./landingPage/LoginPage";




export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div class="cont">
        <LoginPage/>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
