import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-10/12 flex m-auto items-center my-8 '>
      <div className='w-full flex m-auto justify-between items-center font-bold'>
        <div>
        <Link to="/">Logo</Link>
          
          </div>
        <div className='flex gap-8 '>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/singlepost">SinglePost</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className='flex gap-4'>
          <input
            className='w-3/5 text-black text-[15px] bg-black/70 rounded px-4 py-2'
            type="text" name="" id=""
            placeholder='Search..'
          />
          <button>light Mode</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
