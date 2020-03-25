import { BOOKS_LOADED, BOOK_REQUEST, BOOKS_ERROR } from "./../types"

const booksLoaded = newBooks => ({
  type: BOOKS_LOADED,
  payload: newBooks
})

const booksRequest = () => ({ type: BOOK_REQUEST })

const booksError = error => ({ type: BOOKS_ERROR, payload: error })

export { booksLoaded, booksRequest, booksError }
