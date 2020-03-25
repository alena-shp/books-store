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
    this.props.fetchBooksData()
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBooksData: () => {
      dispatch(booksRequest())
      ownProps.booksData
        .getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(error => dispatch(booksError(error)))
    }
  }
}

export default WithBookServiceContext()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
)
