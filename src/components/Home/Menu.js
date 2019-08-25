import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

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
              {/* categories */}
              {/* items  */}
              <div classNamer="row">
                {this.state.coffeeItems.map(({ node }) => {
                  return (
                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex ">
                      {/* <div> <Img fixed={node.image.fixed} /></div> */}
                      <div className="flex-grow-1 px-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-0">{node.title}</h6>
                          <h6 className="mb-0">€{node.price}</h6>
                        </div>
                        <p className="text-muted">
                          <small>{node.description.description}</small>
                        </p>
                      </div>
                    </div>
                  )
                })}
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
