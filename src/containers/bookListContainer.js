import React from "react"
import { connect } from "react-redux"
import { fetchBooksData } from "../actions"
import WithBookServiceContext from "../components/hoc/with-book-service-context"
import Spinner from "../components/spinner"
import BookList from "../components/bookList"
import ErrorIndicator from "../components/error-indicator/error-indicator"

class BookListContainer extends React.Component {
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

    return <BookList books={books} />
  }
}

const mapStateToProps = ({ books, loading, error }) => ({
  books,
  loading,
  error
})

const mapDispatchToProps = (dispatch, { booksData }) => {
  return {
    fetchBooksData: fetchBooksData(dispatch, booksData)
  }
}

export default WithBookServiceContext()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
)
