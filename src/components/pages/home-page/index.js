import React from "react"
import BookList from "../../bookList"
import ShopCardTable from "../../shopCardTable"
import './homePage.scss'

const HomePage = () => {
  return (
    <div className="home-page">
      <BookList />
      <ShopCardTable />
    </div>
  )
}

export default HomePage
