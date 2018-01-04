import React from "react";



import FadeContent from "./FadeContent";
import FadeContentFooter from "./FadeContentFooter";
import Header from "../Header";
import WelcomeSection from "./WelcomeSection";


export default class Dashboard extends React.Component {


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
      <div>
        <Header/>
          <div class="wrapper">
            <div class="content">
              <WelcomeSection/>
              <FadeContent/>
              <FadeContentFooter/>
            </div>
          </div>
      </div>
    );
  }
}
