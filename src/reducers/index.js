import { BOOKS_LOADED } from "./../types"
const initialState = {
  books: [
    { id: "1", title: "Flowers for Algernon", author: "Daniel Keyes" },
    { id: "2", title: "Dandelion Wine", author: "Ray Bradbury" }
  ]
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
