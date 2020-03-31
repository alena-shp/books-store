import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "./shopHeader.scss"
import basketImg from "./../../assets/basketImg.png"

const ShopHeader = ({ cartItems }) => {
  let countCart
  if (cartItems.length === 0) {
    countCart = 0
  } else {
    const count = cartItems.map(item => item.count)
    countCart = count.length === 1 ? count : count.reduce((a, b) => a + b)
  }

  return (
    <div className="shop-header">
      <Link to="/" className="shop-header__logo">
        ShopBooks
      </Link>
      <Link to="/cardpage" className="shop-header__info">
        <img src={basketImg} alt="" />
        <span>{countCart} items ($)</span>
      </Link>
    </div>
  )
}

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems
  }
}
export default connect(mapStateToProps)(ShopHeader)
