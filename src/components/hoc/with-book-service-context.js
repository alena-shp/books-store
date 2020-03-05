import React from "react"
import BookServiceConsumer from "./../book-servise-context"

const WithBookServiceContext = () => Wrapped => {
  return props => {
    return (
      <BookServiceConsumer>
        {bookService => {
          return <Wrapped {...props} bookService={bookService} />
        }}
      </BookServiceConsumer>
    )
  }
}
export default WithBookServiceContext
