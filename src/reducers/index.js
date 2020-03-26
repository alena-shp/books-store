import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from "./../types"
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    { id: 1, title: "Book 1", count: 2, total: 30 },
    { id: 2, title: "Book 2", count: 1, total: 20 }
  ],
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

    default:
      return state
  }
}

export default reducer
