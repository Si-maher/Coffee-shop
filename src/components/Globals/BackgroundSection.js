import React from "react"
import HeroImage from "gatsby-background-image"
// Background section takes four properties
const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <HeroImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-lighter">
        {title}
      </h1>
      {children}
    </HeroImage>
  )
}

export default BackgroundSection
// If no title is given in the index js, then this is the default setting
BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
