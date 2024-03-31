import React from 'react'
import classes from "./builder.module.css";
import Items from "./Items/Items";
import TotalPrice from './TotalPrice/TotalPrice';
function builder() {
  return (
    <div class="react" >
    <div class={classes.builder}>
      <h3>Craft your bespoke ice cream sundae</h3>

      {/* Items */}
      <Items />
      {/* Total Price*/}
      <TotalPrice />

      <button type="button" onclick="next()" class={["rounded", classes.order].join()}>
        Add to Cart
      </button>
    </div>
  </div>
  )
}

export default builder
