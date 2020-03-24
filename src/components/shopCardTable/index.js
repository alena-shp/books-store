import React from "react"
import deleteImg from "./../../assets/deleteImg.png"
import plusImg from "./../../assets/plusImg.png"
import minusImg from "./../../assets/minusImg.png"
import "./shopCardTable.scss"

const ShopCardTable = () => {
  return (
    <div className="shop-carg-table">
      <h3 className="shop-carg-table__title">Your Order</h3>
      <table className="shop-carg-table table">
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
          <tr>
            <td>1</td>
            <td>Dandelion Wine</td>
            <td>1</td>
            <td>$20</td>
            <td>
              <button className="table__btn">
                <img src={minusImg} alt="" />
              </button>
              <button className="table__btn">
                <img src={plusImg} alt="" />
              </button>
              <button className="table__btn">
                <img src={deleteImg} alt="" />
              </button>
            </td>
          </tr>
      </table>
    </div>
  )
}
export default ShopCardTable
