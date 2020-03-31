import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "./shopHeader.scss"
import basketImg from "./../../assets/basketImg.png"

const ShopHeader = ({ cartItems }) => {
  let countCart
  let totalCart

  if (cartItems.length === 0) {
    totalCart = 0
    countCart = 0
  } else {
    const count = cartItems.map(item => item.count)
    const total = cartItems.map(item => item.total)
    countCart = count.length === 1 ? count : count.reduce((a, b) => a + b)
    totalCart = total.length === 1 ? total : total.reduce((a, b) => a + b)
  }

  return (
    <div className="shop-header">
      <Link to="/" className="shop-header__logo">
        ShopBooks
      </Link>
      <Link to="/cardpage" className="shop-header__info">
        <img src={basketImg} alt="" />
        <span>
          {countCart} items (${totalCart})
        </span>
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
