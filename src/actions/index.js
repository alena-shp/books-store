import { BOOKS_LOADED, BOOK_REQUEST, BOOKS_ERROR } from "./../types"

const booksLoaded = newBooks => ({
  type: BOOKS_LOADED,
  payload: newBooks
})

const booksRequest = () => ({ type: BOOK_REQUEST })

const booksError = error => ({ type: BOOKS_ERROR, payload: error })

const fetchBooksData = (dispatch, booksData) => () => {
  dispatch(booksRequest())
  booksData
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(error => dispatch(booksError(error)))
}

export { fetchBooksData }
