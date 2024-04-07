import React from 'react'
import classes from "./header.module.css"
import logo from "../../assets/Images/logo.svg"
import reactLogo from "../../assets/Images/react.svg"
function header() {
  return (
    <header>
    <div className="container" >
      <div>
        <img className={classes.logo} src={logo} alt="Logo" />
        </div>
        <div className={classes.Center}>
            <h1>ChillCraft</h1>
          </div>
      <div className="textRight">
          <img src={reactLogo} alt="React" className={classes.reactLogo} />
          <strong>React</strong>
      </div>
    </div>
  </header>
  )
}

export default header
