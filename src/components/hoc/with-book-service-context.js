import React from "react"
import { BookServiceConsumer } from "./../book-servise-context"

const WithBookServiceContext = () => Wrapped => {
  return props => {
    return (
      <BookServiceConsumer>
        {booksData => {
          return <Wrapped {...props} booksData={booksData} />
        }}
      </BookServiceConsumer>
    )
  }
}
export default WithBookServiceContext
