import React from "react"
import basketImg from "./../../assets/basketImg.png"
import "./shopHeader.scss"

const ShopHeader = ({ numItems, priсe }) => {
  return (
    <div className="shop-header">
      <a className="shop-header__logo" href="#0">
        ShopBooks
      </a>
      <a href="#0" className="shop-header__info">
        <img src={basketImg} alt="" />
        <span>
          {numItems} items (${priсe})
        </span>
      </a>
    </div>
  )
}
export default ShopHeader
