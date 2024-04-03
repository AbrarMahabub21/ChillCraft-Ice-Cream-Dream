import React from 'react'
import classes from "./builder.module.css";
import Items from "./Items/Items";
import TotalPrice from './TotalPrice/TotalPrice';
import Modal from "./Modal/Modal";
function builder() {
  return (
    <div className="react" >
    <div className={classes.builder}>
      <h3>Craft your bespoke ice cream sundae</h3>

      {/* Items */}
      <Items />
      {/* Total Price*/}
      <TotalPrice />

      <button type="button"  className={[classes.order,"rounded"].join(" ")}>
        Add to Cart
      </button>
      </div>
  </div>
  )
}

export default builder
