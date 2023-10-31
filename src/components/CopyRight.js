import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

function CopyRight() {
  return (
    <div className='bg-black w-full h-[100px] pt-10 mt-10 overflow-hidden'>
      <div className='flex items-center justify-center'>
        <a href='https://www.github.com' target='_blank' rel='noopener noreferrer' className='text-white pr-10'>
          <BsGithub />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-white'>
          <BsInstagram />
        </a>
      </div>

      <div className='flex text-[10px] justify-center gap-1 pt-4'>
        <p className='text-gray-300'>CopyRight</p>
        <span className='text-white pt-1'><AiOutlineCopyrightCircle /></span>
        <p className='text-gray-300'>Shubham Rana</p>
      </div>
    </div>
  );
}

export default CopyRight;
