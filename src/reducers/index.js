import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  BOOK_ADD_CART
} from "./../types"
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 100
}

const updateCartItems = (item, newItem, index) =>
  index === -1
    ? [...item, newItem]
    : [...item.slice(0, index), newItem, ...item.slice(index + 1)]

const updateItem = (book, item = {}) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      }
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }

    case BOOK_ADD_CART:
      const bookId = action.payload
      const book = state.books.find(book => book.id === bookId)
      const itemIndex = state.cartItems.findIndex(item => item.id === bookId)
      const item = state.cartItems[itemIndex]
      const newItem = updateItem(book, item)
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      }

    default:
      return state
  }
}

export default reducer
