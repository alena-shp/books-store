import React from "react"
import BookItem from "../bookItem"
import "./bookList.scss"

const BookList = props => {
  return (
    <ul className="book-list">
      {props.books.map(book => (
        <li key={book.id} className="book-list__item">
          <BookItem book={book} />
        </li>
      ))}
    </ul>
  )
}

export default BookList
