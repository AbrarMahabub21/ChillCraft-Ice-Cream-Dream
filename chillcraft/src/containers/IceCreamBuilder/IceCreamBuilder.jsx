import React, { Component } from 'react'
import classes from "./IceCreamBuilder.module.css"
import IceCream from "../../components/IceCream/IceCream"
import Builder from "../../components/Builder/builder"

export default class IceCreamBuilder extends Component {
    state = {};
  render() {
    return (
        <div class={["container", classes.container].join(" ")}> 
            <IceCream />
            <Builder />
        </div>  
    )
  }
}
