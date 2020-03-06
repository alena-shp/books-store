import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import "./index.css"

import App from "./components/app/App"
import bookService from "./services/bookService"
import { BookServiceProvider } from "./components/book-servise-context"
import ErrorBoundary from "./components/error-boundary/error-boundary"
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookServiceProvider value={bookService}>
        <Router>
          <App />
        </Router>
      </BookServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
)
