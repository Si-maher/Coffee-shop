import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

// Create a function to filter categories

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories];
  return categories
}
class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }
  render() {
    console.log(this.state.categories)

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
                      <div> {/* <Img fixed={node.image.fixed} /> */}</div>
                      {/* item content  */}
                      <div className="flex-grow- px-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-0">
                            <small>{node.title}</small>
                          </h6>
                          <h6 className="mb-0 text-yellow">
                            <small>€{node.price}</small>
                          </h6>
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
