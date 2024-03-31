import React from 'react'
import classes from "./body.module.css"
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder'
const body =() => {
  return (
      <div className={classes.mainBody}>
          <IceCreamBuilder />
      </div>
      
  )
}

export default body;
