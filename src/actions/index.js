import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  BOOK_ADD_CART
} from "./../types"

const booksRequest = () => ({ type: FETCH_BOOKS_REQUEST })

const booksLoaded = newBooks => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: newBooks
})

const booksError = error => ({ type: FETCH_BOOKS_FAILURE, payload: error })

const fetchBooksData = (dispatch, booksData) => () => {
  dispatch(booksRequest())
  booksData
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(error => dispatch(booksError(error)))
}

const bookAddCart = bookId => ({ type: BOOK_ADD_CART, payload: bookId })

export { fetchBooksData, bookAddCart }
