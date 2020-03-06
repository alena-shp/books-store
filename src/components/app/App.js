import React from "react"
import HomePage from "../pages/home-page/home-page"
import CardPage from "../pages/card-page/card-page"
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cardpage" component={CardPage} />
      </Switch>
    </div>
  )
}

export default App
