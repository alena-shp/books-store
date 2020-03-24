import React from "react"
import HomePage from "../pages/home-page"
import CardPage from "../pages/card-page"
import { Route, Switch } from "react-router-dom"
import ShopHeader from "../shopHeader"

function App() {
  return (
    <div className="app">
      <ShopHeader numItems={3} priсe={150} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cardpage" component={CardPage} />
      </Switch>
    </div>
  )
}

export default App
