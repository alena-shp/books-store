import React from "react"
import { connect } from "react-redux"
import "./shopCardTable.scss"
import deleteImg from "./../../assets/deleteImg.png"
import plusImg from "./../../assets/plusImg.png"
import minusImg from "./../../assets/minusImg.png"
import {
  bookAddCart,
  bookRemoveCart,
  allBooksRemoveCart
} from "./../../actions"

const ShopCardTable = ({
  cartItems,
  orderTotal,
  onIncrease,
  onDecrease,
  onDelete
}) => {
  return (
    <div className="shop-carg-table">
      <h3 className="shop-carg-table__title">Your Order</h3>
      <table className="shop-carg-table table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, idx) => {
            const { id, title, count, total } = item
            return (
              <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                  <button onClick={() => onDecrease(id)} className="table__btn">
                    <img src={minusImg} alt="" />
                  </button>
                  <button onClick={() => onIncrease(id)} className="table__btn">
                    <img src={plusImg} alt="" />
                  </button>
                  <button onClick={() => onDelete(id)} className="table__btn">
                    <img src={deleteImg} alt="" />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p className="shop-carg-table__total">Total: ${orderTotal}</p>
    </div>
  )
}

const mapStateToProps = ({ cartItems, orderTotal }) => ({
  cartItems,
  orderTotal
})

const mapDispatchToProps = {
  onDecrease: bookRemoveCart,
  onIncrease: bookAddCart,
  onDelete: allBooksRemoveCart
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopCardTable)
