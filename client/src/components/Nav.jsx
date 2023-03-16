import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/search">Recherche</Link>
        <Link to="/add">Ajouter</Link>

    </nav>
  )
}

export default Nav