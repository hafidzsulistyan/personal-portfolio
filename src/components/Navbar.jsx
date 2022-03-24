import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaGitlab,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[72px] flex justify-end items-center px-4 bg-[#e7f0fa] text-[#0f4077] 
      backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-300'
    >

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='border-b-4 border-violet-500 rounded-xl mx-3 hover:bg-violet-600 hover:text-white'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='border-b-4 border-violet-500 rounded-xl mx-3 hover:bg-violet-600 hover:text-white'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='border-b-4 border-violet-500 rounded-xl mx-3 hover:bg-violet-600 hover:text-white'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='border-b-4 border-violet-500 rounded-xl mx-3 hover:bg-violet-600 hover:text-white'>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#e7f0fa] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:bg-violet-600 hover:text-white'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:bg-violet-600 hover:text-white'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:bg-violet-600 hover:text-white'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:bg-violet-600 hover:text-white'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[360%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/hafidzsulistyan'
              rel='noreferrer'
              target='_blank'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F46A25]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://gitlab.com/muhammad.hafidz05'
              rel='noreferrer'
              target='_blank'
            >
              Gitlab <FaGitlab size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/hafidzsulistyanto/'
              rel='noreferrer'
              target='_blank'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;