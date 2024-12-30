'use client'

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link'; // Import the Link component from Next.js

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items with links
  const navItems = [
    { id: 1, text: 'หน้าหลัก', link: '/' },
    { id: 2, text: 'ข้อมูลทั่วไป', link: '/history' },
    { id: 3, text: 'ทำเนียบผู้บริหาร', link: '/commands' },
    { id: 4, text: 'ครูและบุคลากร', link: '/staff' },
    { id: 5, text: 'ติดต่อเรา', link: '/contact' },
    // { id: 6, text: 'Logout', link: '/api/auth/signout' },
  ];

  return (
    <div className='bg-gray-200 flex justify-between w-full h-full
    items-center mx-auto px-6 text-blue-800 rounded-xl'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-blue-900'></h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2 hover:bg-[#7976fa] rounded-xl m-1.5 w-32
            cursor-pointer duration-300 hover:text-black'
          >
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden py-2'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-gray-300 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Nongberd</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2 border-b rounded-xl hover:bg-[#00df9a] 
            duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
