import React from 'react'
import classes from "./Scoop.module.css";
function Scoop() {
  return (
    <div>

      <div class={[classes.scoop,classes.orange].join(" ")}></div>
 

    </div>
  )
}

export default Scoop
