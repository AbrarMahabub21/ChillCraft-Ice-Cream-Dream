import React from 'react'
import classes from "./IceCream.module.css";
import Scoop from "./Scoop/Scoop";

function IceCream() {
  return (
<div>
          <div className={classes.IceCream}>   
              <p className={classes.cone} />
              <div className="scoop vanilla react" id="scoop"></div>
              {/*pls start adding scoops*/ }
              {/* SCOOP-component */}
              <Scoop />
              <div className={classes.cherry}> </div>
            </div>
          </div>
  )
}

export default IceCream
