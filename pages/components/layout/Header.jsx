import React from 'react'
import Logo from '../ui/Logo'
import {FaUserAlt ,FaShoppingCart, FaSearch} from 'react-icons/fa'
const Header = () => {
  return (
    <div className='h-[5.5rem] bg-secondary '>
      <div className='container mx-auto text-white flex justify-between items-center h-full'>
    <div><Logo/></div>
    <nav>
      <ul className='flex'>
      <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>Home</li>
      <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>About</li>
      <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'> Book</li>
      <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'>Table</li>
      </ul>
      </nav>
    <div className='flex gap-x-4 items-center'>
      <a href='#'><FaUserAlt/></a>
      <a href='#'><FaShoppingCart/></a>
      <a href='#'><FaSearch/></a>
<button className='btn-primary'> Order Online</button>
    </div>
    </div>
</div>
  )
}

export default Header