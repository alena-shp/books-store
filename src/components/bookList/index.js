import React from "react"
import BookItem from "../bookItem"
import { connect } from "react-redux"
import { booksLoaded, booksRequest, booksError } from "./../../actions"
import WithBookServiceContext from "../hoc/with-book-service-context"
import Spinner from "./../spinner"
import "./bookList.scss"
import ErrorIndicator from "../error-indicator/error-indicator"

class BookList extends React.Component {
  componentDidMount() {
    const { booksData, booksLoaded, booksRequest, booksError } = this.props
    booksRequest()
    booksData
      .getBooks()
      .then(data => booksLoaded(data))
      .catch(error => booksError(error))
  }
  render() {
    const { books, loading, error } = this.props

    if (error) {
      return <ErrorIndicator />
    }
    if (loading) {
      return <Spinner />
    }

    return (
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id} className="book-list__item">
            <BookItem book={book} />
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ books, loading, error }) => ({
  books,
  loading,
  error
})

export default WithBookServiceContext()(
  connect(mapStateToProps, { booksLoaded, booksRequest, booksError })(BookList)
)
