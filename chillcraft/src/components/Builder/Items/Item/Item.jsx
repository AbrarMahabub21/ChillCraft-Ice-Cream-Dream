import React from 'react'
import classes from "./Item.module.css";
import {countBy} from 'lodash';
const Item = ({ name, add, remove, scoops ={} }) => {
const countByScoops = countBy(scoops);
  return (
<li className={classes.item}>
                    <span>{name}</span>
      {countByScoops[name]>=0 ?(<span className={classes.quantity}>{  countByScoops[name] }</span>):null}
                    <div className="right">
                      <button onClick={add.bind(this,name)} type="button" className={[classes.plus,'rounded'].join(' ')}>+</button>
                      <button onClick={remove.bind(this,name)} type="button" className={[classes.minus, "rounded"].join(' ')}>-</button>
                    </div>
                  </li>
  )
}

export default Item;
