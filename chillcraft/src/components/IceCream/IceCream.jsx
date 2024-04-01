import React from 'react';
import classes from "./IceCream.module.css";
import Scoop from "../Scoop/Scoop";
const IceCream = ({ items }) => {
  const flavors = object.keys(items);
  return (
    <div class={classes.icecream}>
      <p class={classes.cone}></p>
      {flavors.map((flavor)=>{
            <Scoop />
      })}
  
    <div class={classes.cherry}></div>
  </div>
  )
}

export default IceCream

