import { BOOKS_LOADED, BOOK_REQUEST } from "./../types"

const booksLoaded = newBooks => ({
  type: BOOKS_LOADED,
  payload: newBooks
})

const booksRequest = () => ({ type: BOOK_REQUEST })

export { booksLoaded, booksRequest }
