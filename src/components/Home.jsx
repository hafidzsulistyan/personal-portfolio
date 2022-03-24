import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#e7f0fa]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-violet-500'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#0f4077]'>
          Hafidz Sulistyanto
        </h1>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m an aspiring software engineer. Currently, I’m focused into frontend
          development both in web and mobile application.
        </p>
        <div>
          <Link to='projects' smooth={true} duration={500}>
            <button className='border-violet-500 text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-500 hover:violet-500'>
              View Projects
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;