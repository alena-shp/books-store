import React from "react"
import BookItem from "../bookItem"
import { connect } from "react-redux"
import { booksLoaded } from "./../../actions"
import WithBookServiceContext from "../hoc/with-book-service-context"

class BookList extends React.Component {
  componentDidMount() {
    const { booksData } = this.props
    const data = booksData.getBooks()
    this.props.booksLoaded(data)
  }
  render() {
    const { books } = this.props

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

const mapStateToProps = ({ books }) => ({ books })

export default WithBookServiceContext()(
  connect(mapStateToProps, { booksLoaded })(BookList)
)
