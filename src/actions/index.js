import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  BOOK_ADD_CART,
  BOOK_REMOVE_CART,
  ALL_BOOKS_REMOVE_CART
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
const bookRemoveCart = bookId => ({ type: BOOK_REMOVE_CART, payload: bookId })
const allBooksRemoveCart = bookId => ({
  type: ALL_BOOKS_REMOVE_CART,
  payload: bookId
})

export { fetchBooksData, bookAddCart, bookRemoveCart, allBooksRemoveCart }
