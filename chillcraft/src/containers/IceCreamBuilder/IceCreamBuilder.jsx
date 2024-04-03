import React, { Component } from 'react'
import classes from "./IceCreamBuilder.module.css"
import IceCream from "../../components/IceCream/IceCream"
import Builder from "../../components/Builder/builder"

export default class IceCreamBuilder extends Component {
  state = {
    items: {
      vanilla: 45,
      chocolate: 50,
      lemon: 35,
      strawberry: 40,
      orange: 30,
    },
    scoops: [],
    totalPrice: 0,
    };
  render() {
    const { items } = this.state;
    return (
        <div className={["container", classes.container].join(" ")}> 
        <IceCream items={items} />
            <Builder />
        </div>  
    )
  }
}
