import React from "react"
import basketImg from "./../../assets/basketImg.png"
import { Link } from "react-router-dom"
import "./shopHeader.scss"

const ShopHeader = ({ numItems, priсe }) => {
  return (
    <div className="shop-header">
      <Link to="/" className="shop-header__logo">
        ShopBooks
      </Link>
      <Link to="/cardpage" className="shop-header__info">
        <img src={basketImg} alt="" />
        <span>
          {numItems} items (${priсe})
        </span>
      </Link>
    </div>
  )
}
export default ShopHeader
