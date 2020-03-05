import React from "react"
import "./error-indicator.scss"
import icon from "./errorImg.svg"

const ErrorIndicator = () => {
  return (
    <div className="errorIndicator">
      <img src={icon} className="errorIndicator__icon" alt="" />
      <span className="errorIndicator__text">
        Sorry!
        <br />
        something went wrong, <br />
        (but the cat will fix it)
      </span>
    </div>
  )
}

export default ErrorIndicator
