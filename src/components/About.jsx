import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#e7f0fa] text-[#0f4077]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-violet-500'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-gray-500'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Hafidz, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a sophomore pursuing Computer Science from University of Indonesia. I am passionate about building 
                excellent software that improves the lives of those around me. I love to learn and explore new technologies
                and currently into Software Engineering while also deep dive in UI/UX or Product Design world.
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;