import React from 'react'
import classes from "./builder.module.css";
function builder() {
  return (
    <div class="react" >
    <div class={classes.builder}>
      <h3>Build your own Ice Cream Sundae</h3>

      <div className="react" id="items">
        <ul>

          <li className="react item" id="item">
            <span>Vanilla</span>
            <span className="quantity">2</span>
            <div className="right">
              <button type="button" class="plus rounded">+</button>
              <button type="button" class="minus rounded">-</button>
            </div>
          </li>

          <li class="item">
            <span>Chocolate</span>
            <div className="right">
              <button type="button" class="plus rounded">+</button>
              <button type="button" class="minus rounded">-</button>
            </div>
          </li>

          <li className="item">
            <span>Strawberry</span>
            <div className="right">
              <button type="button" class="plus rounded">+</button>
              <button type="button" class="minus rounded">-</button>
            </div>
          </li>

          <li class="item">
            <span>Orange</span>
            <div class="right">
              <button type="button" class="plus rounded">+</button>
              <button type="button" class="minus rounded">-</button>
            </div>
          </li>
        </ul>
      </div>

      <div class="total react" id="total">
        <div>Total Price</div>
        <div>3000.00 Tk</div>
      </div>

      <button type="button" onclick="next()" class="order rounded">
        Add to Cart
      </button>
    </div>

 
    <div class="react" id="modal">
      <div class="backdrop" onclick="removeModal()"></div>
      <div class="modalBody">
        <div class="formContainer react" id="orderForm">
          <h1>Complete the form below and hit submit</h1>
          <form class="orderForm">
            <ul>
              <li>
                <input
                  type="text"
                  name="name"
                  class="fieldStyle fieldSplit alignLeft"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="phone"
                  class="fieldStyle fieldSplit alignRight"
                  placeholder="Phone no."
                />
              </li>
              <li>
                <input
                  type="text"
                  name="email"
                  class="fieldStyle fieldFull"
                  placeholder="Email"
                />
              </li>
              <li>
                <textarea
                  name="address"
                  class="fieldStyle"
                  placeholder="Address"
                ></textarea>
              </li>
              <li>
                <input type="submit" value="Submit Order" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>

  </div>
  )
}

export default builder
