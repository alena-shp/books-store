import React from "react"
import "./bookItem.scss"

const BookItem = ({ book, onAddCartBook }) => {
  const { title, author, price, img } = book
  return (
    <>
      <img className="book-item-img" src={img} alt="" />
      <div className="book-item-description">
        <span className="book-item-description__title">{title}</span>
        <span className="book-item-description__author">{author}</span>
        <span className="book-item-description__price">${price}</span>
        <button onClick={onAddCartBook} className="book-item-description__btn">
          Add to cart
        </button>
      </div>
    </>
  )
}
export default BookItem
