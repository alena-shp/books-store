import React from "react"
import BookItem from "../bookItem"
import "./bookList.scss"

const BookList = ({ books, onAddCartBook }) => {
  return (
    <ul className="book-list">
      {books.map(book => (
        <li key={book.id} className="book-list__item">
          <BookItem book={book} onAddCartBook={() => onAddCartBook(book.id)} />
        </li>
      ))}
    </ul>
  )
}

export default BookList
