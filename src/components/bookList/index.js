import React from "react"
import BookItem from "../bookItem"
import { connect } from "react-redux"

class BookList extends React.Component {
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

const mapStateToProps = state => ({ books: state.books })

export default connect(mapStateToProps)(BookList)
