import React from "react"
import BookItem from "../bookItem"
import { connect } from "react-redux"
import { booksLoaded } from "./../../actions"
import WithBookServiceContext from "../hoc/with-book-service-context"
import "./bookList.scss"

class BookList extends React.Component {
  componentDidMount() {
    const { booksData, booksLoaded } = this.props
    booksData.getBooks().then(data => {
      booksLoaded(data)
    })
  }
  render() {
    const { books } = this.props

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

const mapStateToProps = ({ books }) => ({ books })

export default WithBookServiceContext()(
  connect(mapStateToProps, { booksLoaded })(BookList)
)
