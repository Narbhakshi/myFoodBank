import React from "react";



import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div class="styleh opacityh">
         <div id="navbar-bg" class="transparent opacityh" data-transparent-bar="true" data-navbar-opacity="1" data-dropdown-transparent="enabled">
         </div>
         <div id="navbar">
            <div class="fluid-container">
               <div class="logo fluid-logo  custom">
                  <h1 class="semibold">
                     <nobr><a id="logo" href="http://www.grafite.cz/en">Studio Grafite</a></nobr>
                  </h1>
               </div>
               <div class="fluid-menu ">
                  <nav class="standard semibold">
                     <ul id="menu-main-menu-en" class="menu">
                        <li id="menu-item-1108" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1108"><a href="http://www.grafite.cz/en/projects/">Projects</a></li>
                        <li id="menu-item-1109" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1109"><a href="http://www.grafite.cz/en/studio/">Studio</a></li>
                        <li id="menu-item-1110" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1110"><a href="http://www.grafite.cz/en/contact/">Contact</a></li>
                     </ul>
                  </nav>
                  <div class="controls">
                     <a class="open-nav menu-responsive">
                     <span class="nav-icon"></span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
  }
}
