import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa6';
import flag from '../Assests/flag.png';
import Typewriter from 'typewriter-effect';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {FaComputerMouse} from 'react-icons/fa6';
import {BiSolidKeyboard} from 'react-icons/bi';

const roles = ["Front End Developer", "Back End Developer", "Full Stack Developer"];

const Header = () => {
  const [index, setIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [collapseClass, setCollapseClass] = useState('w-0');

  useEffect(() => {
    const incrementRole = () => {
      setCollapseClass('w-0');
      setTimeout(() => {
        setDisplayedRole(roles[index]);
      }, 1500);
      setTimeout(() => {
        setCollapseClass('w-full');
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 2000);
    };

    const interval = setInterval(incrementRole, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="bg-black xl:mr-16 w-full ">
      <div className=" w-[30px] h-[30px] rounded-full pt-2 pl-[5px] relative top-7 left-[22px] ">
      <a href="https://github.com/RhaegarTargaryenn">
  <span className="text-red-500 hover:text-red-800 sm:text-[30px] md:text-[60px] text-[30px]">
    <FaGithub />
  </span>
</a>
      </div>

      <div className="flex flex-col items-center pt-[20px] rounded-3xl ">
        <div className='text-red-600 md:text-[200px] sm:text-[150px] text-[100px]'>
                <HiOutlineDesktopComputer/>
          <div className='text-[30px] sm:flex justify-center  hidden'>
             <FaComputerMouse/><span className='pl-5'><BiSolidKeyboard/></span>
          </div>
          </div>
        <p className="text-gray-400 font-mono pt-16 md:text-[20px] sm:text-[15px]">Shubham Rana</p>
        <div className="flex gap-2 text-gray-400 text-2xl md:text-4xl mx-auto font-serif">
          <div className={`whitespace-nowrap ml-auto`}>
        
          </div>
          <div className={`text-gray-300 sm:text-[20px] font-bold  overflow-hidden whitespace-nowrap transition-all ease-out duration-1000 ${collapseClass}`}>
            <Typewriter
              options={{
                strings: [displayedRole],
                autoStart: true,
                loop: false,
                pauseFor: 1500,
                deleteSpeed: 'natural',
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <img src={flag} className='h-[30px]' alt="flag" />
      </div>
    </div>
  );
};

export default Header;
