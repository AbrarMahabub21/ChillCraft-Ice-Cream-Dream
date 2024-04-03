import React from 'react'
import classes from "./Scoop.module.css";
const Scoop = ({scoop}) => {
  return (
    <div>
      <div class={[classes.scoop,classes[scoop]].join(' ')}></div>
    </div>
  )
}

export default Scoop

