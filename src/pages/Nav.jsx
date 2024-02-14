import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log("Path" + path)
  return (
        <nav>
          <Link to="/" className={`${path === '/' && 'text-blue-500'}`}>Home</Link>
          <Link to="/about" className={`${path === '/about' && 'text-blue-500'}`}>About</Link>
          <Link to="/contact" className={`${path === '/contact' && 'text-blue-500'}`}>Contact</Link>
          <Link to="/blog" className={`${path === '/blog' && 'text-blue-500'}`}>Blog</Link>
        </nav>
  )
}

export default Nav