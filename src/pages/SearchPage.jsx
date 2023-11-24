import React from 'react'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import './SearchPage.css'
import Searchbar from '../Searchbar.jsx'

function SearchPage() {
  return (
    <div>
      <Header />
        <Searchbar/>
      <Footer />
    </div>
  )
}

export default SearchPage