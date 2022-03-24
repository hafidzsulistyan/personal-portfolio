import React from "react";

import Dart from '../assets/images/dart.png';
import Django from '../assets/images/django.png';
import Flutter from '../assets/images/flutter.png';
import Java from '../assets/images/java.png';
import Javascript from '../assets/images/javascript.png';
import Python from '../assets/images/python.png';
import ReactJS from '../assets/images/react.png';
import Tailwind from '../assets/images/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#e7f0fa] text-[#0f4077]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-violet-500 '>Skills</p>
            <p className='py-4 text-gray-500'>\\ These are the technologies I've been recently worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Dart} alt="Dart icon" />
            <p className='my-4'>Dart</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Django} alt="Django icon" />
            <p className='my-4'>Django</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt="Java icon" />
            <p className='my-4'>Java</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="Python icon" />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Flutter} alt="Flutter icon" />
            <p className='my-4'>Flutter</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactJS} alt="ReactJS icon" />
            <p className='my-4'>React Js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
            <p className='my-4'>Tailwind Css</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;