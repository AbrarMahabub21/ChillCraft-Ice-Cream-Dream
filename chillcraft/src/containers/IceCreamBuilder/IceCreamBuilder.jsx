import React, { Component } from 'react'
import classes from "./IceCreamBuilder.module.css"
import IceCream from "../../components/IceCream/IceCream"
import Builder from "../../components/Builder/builder"

export default class IceCreamBuilder extends Component {
  state = {
    items: {},
    scoops: [],
    totalPrice: 0,
  };
  
     componentDidMount() {
    fetch("https://chillcraft-e2423-default-rtdb.firebaseio.com/items.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          items: responseData,
        });
      });
   } 

    addScoop = (scoop) => {
      const { scoops, items } = this.state;
      const workingScoop = [...scoops];
      workingScoop.push(scoop);
      this.setState((prevState) => {
        return {
          scoops: workingScoop,
          totalPrice: prevState.totalPrice + items[scoop],
        };
      });
    };
    removeScoop = (scoop) => {
      const { scoops, items } = this.state;
      const workingScoop = [...scoops];

      const scoopIndex = workingScoop.findIndex((sc) => sc === scoop);

      workingScoop.splice(scoopIndex, 1);
      this.state((prevState) => {
        return {
          scoops: workingScoop,
          totalPrice: prevState.totalPrice - items[scoop],
        };
      });
    };
    render() {
      const { items, totalPrice, scoops } = this.state;
      return (
        <div className={["container", classes.container].join(" ")}>
          <IceCream scoops={scoops} />
          <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop} scoops={scoops} />
        </div>
      );
    }
  }


