import React from 'react'
import { Link, useNavigate } from 'react-router';

const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    <div>
        <nav className="bg-white shadow sticky top-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Left: Logo */}
      <div className="flex-shrink-0 flex items-center">
        <h1 onClick={()=> navigate('/')} className='text-2xl font-bold text-blue-600 cursor-pointer'>Cartify</h1>
      </div>
      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center px-2">
        <div className="w-full max-w-md">
          <label htmlFor="search" className="sr-only">Search</label>
          <div className="relative">
            <input
              id="search"
              className="block w-full pl-10 pr-3 py-2 border rounded-lg leading-5 bg-gray-100 placeholder-gray-500 focus:bg-white focus:outline-none focus:shadow focus:border-blue-300 sm:text-sm transition"
              placeholder="Search"
              type="search"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Nav Links & Buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/cart" className="hidden sm:inline-flex items-center text-gray-700 hover:text-blue-600 font-medium">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 7V6a2 2 0 012-2h8a2 2 0 012 2v1" />
            <path d="M6 7h12l-1 10a2 2 0 01-2 2H9a2 2 0 01-2-2L6 7z" />
          </svg>
          Cart
        </Link>
        <button onClick={()=> navigate('/auth')} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Login</button>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">Become a Seller</button>
        {/* Hamburger for mobile */}
        <button className="sm:hidden inline-flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar