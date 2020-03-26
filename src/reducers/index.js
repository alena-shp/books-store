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
      const newCartItem = {
        id: book.id,
        title: book.title,
        count: 1,
        total: book.price
      }
      return {
        ...state,
        cartItems: [...state.cartItems, newCartItem]
      }

    default:
      return state
  }
}

export default reducer
