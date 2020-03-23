import React from "react"

const BookItem = ({ book }) => {
  const { title, author } = book
  return (
    <div>
      <span>{title}</span>
      <span>{author}</span>
    </div>
  )
}
export default BookItem
