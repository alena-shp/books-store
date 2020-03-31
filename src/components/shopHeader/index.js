import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "./shopHeader.scss"
import basketImg from "./../../assets/basketImg.png"

const ShopHeader = ({ cartItems }) => {
  console.log(cartItems)

  let sum
  if (cartItems.length === 0) {
    sum = 0
  } else {
    let total = cartItems.map(item => item.count)
    sum = total.length === 1 ? total : total.reduce((a, b) => a + b)
    
  }
  console.log(sum)

  return (
    <div className="shop-header">
      <Link to="/" className="shop-header__logo">
        ShopBooks
      </Link>
      <Link to="/cardpage" className="shop-header__info">
        <img src={basketImg} alt="" />
        <span>{sum} items ($)</span>
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
