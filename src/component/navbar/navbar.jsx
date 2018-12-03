import React, { Component } from "react";
import "./navbar.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
var ulStyle = {
  display: "inline-flex",
  listStyleType: "none"
};


class Navbar extends Component {
  constructor(props) {
    super(props);
    window.addEventListener('scroll', this.navbarScrollcss);
  }
  
navbarScrollcss() {
   let lastScrollY = window.scrollY; 
   lastScrollY >20 ?  document.getElementById('header').setAttribute("class","headerscroll") :   document.getElementById('header').setAttribute("class","header")
}

  render() {
    return (
      <div className="header" id="header" ref="header">
        <div id="navbar" >
          <ul style={ulStyle}>
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink  to='content'>Prime</NavLink>
            </li>
            <li>
              <NavLink  to='user/pratik'>User</NavLink>
            </li>
          </ul>
          <button 
                type="button" className="btn btn-primary" style={{float:"right",margin:"14px"}}
                onClick={ this.props.login }
            >
            {this.props.content.login || localStorage.setItem('ss',false) ? 'logout' :'login'}
            </button>
        </div>
      </div>
    );
  }
}

// toggle()
// {
//   let classes = ""
// }

export default Navbar;
