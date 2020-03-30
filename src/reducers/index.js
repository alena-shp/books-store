import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  BOOK_ADD_CART,
  BOOK_REMOVE_CART,
  ALL_BOOKS_REMOVE_CART
} from "./../types"
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 100
}

const updateCartItems = (item, newItem, index) => {

  if (newItem.count === 0) {
    return [
      ...item.slice(0, index), ...item.slice(index + 1)
    ]
  }
  return index === -1
    ? [...item, newItem]
    : [...item.slice(0, index), newItem, ...item.slice(index + 1)]
}
const updateItem = (book, item = {}, amount) => {

  const { id = book.id, title = book.title, count = 0, total = 0 } = item

  return {
    id,
    title,
    count: count + amount,
    total: total + amount*book.price
  }
}

const updateOrder = (state, bookId, amount) => {
  const { books, cartItems } = state
  const book = books.find(book => book.id === bookId)
  const itemIndex = cartItems.findIndex(item => item.id === bookId)
  const item = cartItems[itemIndex]
  const newItem = updateItem(book, item, amount)
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
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
      return updateOrder(state, action.payload, 1)

    case BOOK_REMOVE_CART:
      return updateOrder(state, action.payload, -1)

    case ALL_BOOKS_REMOVE_CART:
      const deleteId = action.payload
      const itemDeleteId = state.cartItems.findIndex(
        item => item.id === deleteId
      )
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, itemDeleteId),
          ...state.cartItems.slice(itemDeleteId + 1)
        ]
      }

    default:
      return state
  }
}

export default reducer
