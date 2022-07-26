import React from "react";
import {NavLink} from "react-router-dom";

export default function header() {
const styles = {
    header: {
        width: "100%",
        height: "4.5vw",
        display: "flex",
        fontFamily: "Source Code Pro, monospace",
        letterSpacing: "2.5px",
        justifyContent: "left",
        paddingLeft: "3vw",
        background: "#333333",
  
    },
  

  
    navfont:{
      color:"#C586C0",
      fontSize:"1.2vw",
      fontFamily:"Source Code Pro, monospace",
      justifyContent: "space-around",
      alignContent: "center",
      background: "transparent",
      border: "none",
      padding: "1vw",
      paddingLeft: "4vw",
      fontWeight:"100",
      marginTop:"0.5vw"
    },

    ul:{
        listStyleType: "none",
        margin: "0",
        paddingLeft: "10px",
        borderLeft: "1px solid #686868",

    },
  
 
  }


  return (
    <div class="header" style={styles.header}>
    
        <NavLink className="nav-link" to="/">
            <h4 class="nav-title-font" style={styles.navfont}>Tasha Akemah</h4>
        </NavLink>


        <ul class="navbar-nav ml-auto navitem-indent" style={styles.ul}>
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font" style={styles.navfont}>About Me</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="nav-font " style={styles.navfont}>Portfolio</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">
              <div class="nav-font " style={styles.navfont}>Contact</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/resume">
              <div class="nav-font" style={styles.navfont}>Resume</div>
            </NavLink>
          </li>
        </ul>
     
    </div>
  );
}
