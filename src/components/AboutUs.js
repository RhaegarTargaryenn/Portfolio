import React , {useEffect} from 'react';
import myself from '../Assests/myself.jpg';
import react from '../Assests/react.png';
import express from '../Assests/express.png';
import tailwind from '../Assests/tailwind.png';
import { BsEmojiSmile } from 'react-icons/bs';
import { PiHandWavingFill } from 'react-icons/pi';
import './AboutUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';




function AboutUs() {

 
    useEffect(() => {
      AOS.init();
    }, []);
  

  return (
    <div className='bg-white mt-10 sm:mt-2 overflow-hidden'>
      <div className='flex justify-center items-center mt-10 text-[50px]'>
        <div className="box">
  <div className="inner shadow-2xl">
    <span>About Me</span>
      </div>
         <div className="inner">
            <span>About Me</span>
         </div>
      </div>
   </div>

      <div className='lg:flex lg:flex-row md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center lg:justify-between lg:mt-16 md:mt-10 sm:mt-10 mt-10'>
        <div className='bg-white md:w-[270px] md:h-[420px] sm:w-[270px] sm:h-[420px] w-[248px] h-[400px]  lg:w-[270px] lg:h-[450px] xl:ml-[70px] md:ml-[40px]  flex flex-col shadow-xl sm:mt-0 mt-6' data-aos="fade-right">
          <div className='md:pl-[9px] md:pt-3 sm:pl-[12px] sm:pt-3 pl-[30px] pt-3 border-lime-500'>
            <img src={myself} className='md:h-[250px] sm:h-[250px] h-[230px] rounded-lg' alt='' />
          </div>

          <span className='flex pt-10 justify-evenly'>
            <img src={react} className='h-[40px] ' alt='#' />
            <img src={express} className='h-[40px]' alt='#' />
            <img src={tailwind} className='h-[40px]' alt='#' />
          </span>
        </div>

        <div className='xl:mr-32 lg:mr-16 md:pl-10 mt-16 '>
          <div className='xl:w-[700px] lg:w-[600px] md:w-[700px] sm:w-[500px] w-[300px] h-[300px] border border-gray-200 '  data-aos="fade-left">
            <div className='w-full h-8 bg-gray-100 pt-2 pl-4 flex gap-3 border  border-gray-200'>
              <div className='w-3 h-3 bg-red-600 rounded-full'></div>
              <div className='w-3 h-3 bg-yellow-300 rounded-full '></div>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>

            <div className='pt-10'>
              <h1 className='flex text-[20px] pl-6'>
                Hi<span className='text-yellow-500 pt-1 pl-2'><BsEmojiSmile /></span>
              </h1>
              <p className='text-[10px] pl-10 pt-6 text-black font-semibold pr-2'>
                <span className='text-yellow-300 text-[14px]'><PiHandWavingFill /></span>
                Hello! I'm Shubham Rana, a passionate Full Stack Developer and Data Scientist based in Faridabad. With a keen eye for detail and a love for crafting beautiful user experiences, I enjoy turning ideas into interactive and responsive websites, as well as analyzing data to derive meaningful insights. My journey in web development and data science began with curiosity and a desire to bring creativity to life through code and statistical analysis
              </p>
            </div>
          </div>
          <div className='mt-10 pt-3 lg:pl-2 md:pl-[240px] sm:pl-[170px] pl-[60px]  text-white'>
          <a
  href="https://drive.google.com/file/d/1FXunEbZin9c58-Yz2gkkgnTGSAaJ5T2o/view?usp=drive_link" data-aos="fade-up" 
  download="My Resume.pdf"
  className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm text-center mr-2 mb-2 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono  tracking-tighter bg-gray-800 group'
>
  <span className='absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56'></span>
  <span className='absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700'></span>
  <span className='relative'>Download CV</span>
</a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
