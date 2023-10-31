import React from 'react'
import {AiOutlineHtml5} from 'react-icons/ai';
import {FaCss3Alt , FaReact} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io5';
import {BiLogoTailwindCss , BiLogoMongodb} from 'react-icons/bi';
import {SiExpress} from 'react-icons/si';
import './Projects.css';

function Skiils(){
  return (
       <div className='bg-black mt-1'>
                <div className='pt-4'>
                    <p className='text-white text-center pt-10 tracking-[30px]'>
                        Skiils 
                    </p>
                </div>

                <div className='flex flex-row justify-evenly pt-10 mt-10 '>
                      <div className='text-white pt-2 bg-slate-900 md:w-[100px] sm:w-[60px] h-full sm:text-[10px] text-[6px] tracking-widest flex flex-col items-center rounded-xl pb-2 card'>
                        <div className='sm:text-[60px] text-[40px]'><AiOutlineHtml5/></div>
                        HTML 5
                      </div>

                      <div className='text-white pt-2 bg-slate-900 md:w-[100px] sm:w-[60px] h-full sm:text-[10px] text-[6px] tracking-widest flex flex-col items-center rounded-xl pb-2 card'>
                        <div className='sm:text-[60px]  text-[40px]'><FaCss3Alt/></div>
                        CSS
                      </div>

                      <div className='text-white pt-2 bg-slate-900 md:w-[100px] sm:w-[60px] h-full sm:text-[10px]  text-[6px] tracking-widest flex flex-col items-center rounded-xl pb-2 card'>
                        <div className=' sm:text-[60px]  text-[40px]'><IoLogoJavascript/></div>
                        JAVASCRIPT
                      </div>

                      
                      <div className='text-white pt-2 bg-slate-900 md:w-[100px] sm:w-[60px] h-full sm:text-[10px]  text-[6px] tracking-widest flex flex-col items-center rounded-xl pb-2 card'>
                        <div className='sm:text-[60px]  text-[40px]'><FaReact/></div>
                        React
                      </div>

                      <div className='text-white pt-2 bg-slate-900 md:w-[100px] sm:w-[60px] h-full sm:text-[10px]  text-[6px] tracking-widest flex flex-col items-center rounded-xl pb-2 card'>
                        <div className=' sm:text-[60px]  text-[40px]'><BiLogoTailwindCss/></div>
                        Tailwind
                      </div>

                      <div className='text-white pt-2 bg-slate-900 md:w-[100px] sm:w-[60px] h-full sm:text-[10px]  text-[6px] tracking-widest flex flex-col items-center rounded-xl pb-2 card'>
                        <div className=' text-[40px] sm:text-[60px]'><BiLogoMongodb/></div>
                        Mongo
                      </div>

                      <div className='text-white pt-2 bg-slate-900 md:w-[100px] sm:w-[60px] h-full text-[10px] tracking-widest flex flex-col items-center rounded-xl mb-32 pb-2 card'>
                        <div className=' text-[40px] sm:text-[60px]'><SiExpress/></div>
                        Express js
                      </div>

                </div>
       </div>
  )
}

export default Skiils;
