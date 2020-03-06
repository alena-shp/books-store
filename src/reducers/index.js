import { BOOKS_LOADED } from "./../types"
const initialState = {
  newBooks: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_LOADED:
      return {
        newBooks: action.payload
      }
    default:
      return state
  }
}

export default reducer
