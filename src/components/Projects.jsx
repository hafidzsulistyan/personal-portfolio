import React from 'react';
import Coloorish from '../assets/images/coloorish.png';
import Globulator from '../assets/images/globulator.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-500 bg-[#e7f0fa]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#0f4077] border-violet-500'>
            Projects
          </p>
          <p className='py-6'>\\ These are some of the projects that I've recently built</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Coloorish})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-3xl font-bold text-white'>
                Coloorish
              </span>
              <p className='text-xs font-bold text-gray-300 pl-1'>
                Color palette generator built with vanilla JS
              </p>
              <div className='mt-8 text-center'>
                <a href='https://hafidzsulistyan.github.io/coloorish/' rel='noreferrer' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live Demo
                  </button>
                </a>
                <a href='https://github.com/hafidzsulistyan/coloorish'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Globulator})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-3xl font-bold text-white'>
                Globulator
              </span>
              <p className='text-xs font-bold text-gray-300 pl-1'>
                Global calculator for maths, bmi and bills
              </p>
              <p className='text-xs font-bold text-gray-300 pl-1'>
                built in mobile apps using Flutter
              </p>
              <div className='cursor-not-allowed mt-8 text-center'>
                <a className='pointer-events-none' href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    No Live Demo
                  </button>
                </a>
                <a href='https://github.com/hafidzsulistyan/globulator'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;