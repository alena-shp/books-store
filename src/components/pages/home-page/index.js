import React from "react"
import ShopCardTable from "../../shopCardTable"
import "./homePage.scss"
import BookListContainer from "./../../../containers/bookListContainer"

const HomePage = () => {
  return (
    <div className="home-page">
      <BookListContainer />
      <ShopCardTable />
    </div>
  )
}

export default HomePage
