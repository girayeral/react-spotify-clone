import React from 'react'
import Navigation from './Navbar/Navigation'
import Auth from './Navbar/Auth'
import Search from './Navbar/Search'
import {useMatch} from "react-router-dom";



const Navbar = () => {
  const searchRoute = useMatch('/search')

  return (
    <div className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation />
      {searchRoute && <Search />}
      <Auth />
    </div>
  )
}

export default Navbar