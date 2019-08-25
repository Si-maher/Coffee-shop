import React, { Component } from "react"
import Title from "../Globals/Title"
import { FaBatteryEmpty } from "react-icons/fa"

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
    }
  }
  render() {
    //   If the array has items, then run this code block
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Our menu" />
            <div className="row mb-5">
              <div className="col">
                <h1>Items for sale</h1>
              </div>
            </div>
          </div>
        </section>
      )
    } else {
      // If the array is FaBatteryEmpty, run this block
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are currently no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Menu
