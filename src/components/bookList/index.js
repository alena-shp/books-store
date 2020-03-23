import React from "react"
import BookItem from "../bookItem"

const books = [
  { id: "1", title: "Flowers for Algernon", author: "Daniel Keyes" },
  { id: "2", title: "Dandelion Wine", author: "Ray Bradbury" }
]

export default class BookList extends React.Component {
 
  render() {
    return (
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <BookItem book={book} />
          </li>
        ))}
      </ul>
    )
  }
}
