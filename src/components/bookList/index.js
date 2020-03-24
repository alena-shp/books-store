import React from "react"
import BookItem from "../bookItem"
import { connect } from "react-redux"
import { booksLoaded } from "./../../actions"
import WithBookServiceContext from "../hoc/with-book-service-context"
import Spinner from "./../spinner"
import "./bookList.scss"

class BookList extends React.Component {
  componentDidMount() {
    const { booksData, booksLoaded } = this.props
    booksData.getBooks().then(data => {
      booksLoaded(data)
    })
  }
  render() {
    const { books, loading } = this.props

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

const mapStateToProps = ({ books, loading }) => ({ books, loading })

export default WithBookServiceContext()(
  connect(mapStateToProps, { booksLoaded })(BookList)
)
