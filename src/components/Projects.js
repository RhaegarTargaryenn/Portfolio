import React ,{useEffect} from 'react'
import password from '../Assests/password.png';
import blog from '../Assests/blog.png';
import random from '../Assests/random.png';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Projects(){

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    
    <div className='bg-[#fee0c2] w-full mt-16 overflow-hidden'>
            <p className='text  pt-32 text-[40px] mr-[200px]'>Projects</p>
    
    <div className='bg-[#fee0c2] md:flex md:flex-row md:justify-evenly sm:flex sm:flex-col sm:items-center flex flex-col items-center pt-4 '>
    <a href='https://heartfelt-valkyrie-824bb9.netlify.app/' target='_blank' rel='noopener noreferrer'  data-aos="zoom-in">
      <div className='lg:w-[291px] lg:h-[350px] md:w-[220px] md:h-[270px] sm:w-[291px] sm:h-[350px] w-[250px] h-[300px] border mt-10 mb-10 bg-white hover:shadow-2xl card'>
        <div className='w-[90%] ml-3 h-[70%] mt-2 border border-black'>
          <img src={random} className='w-fit h-full' alt=''/>
        </div>
        <p className='text-center pt-10 tracking-widest'>Random GIF Generator</p>
      </div>
    </a>


    <a href='https://frolicking-taffy-8d23be.netlify.app/' target='_blank' rel='noopener noreferrer'  data-aos="zoom-in">
      <div className='card lg:w-[291px] lg:h-[350px] md:w-[220px] md:h-[270px] sm:w-[291px] sm:h-[350px]  w-[250px] h-[300px] border mt-10 mb-10 bg-white hover:shadow-2xl'>
        <div className='w-[91%] ml-3 h-[70%] mt-2 border border-black'>
          <img src={blog} className='w-full h-full' alt=''/>
        </div>
        <p className='text-center pt-10 tracking-widest'>Blog Website</p>
      </div>
    </a>

    <a href='https://resilient-youtiao-fdfff7.netlify.app/' target='_blank' rel='noopener noreferrer'   data-aos="zoom-in">
      <div className='lg:w-[291px] lg:h-[350px] md:w-[220px] md:h-[270px] sm:w-[300px] sm:h-[350px]  w-[250px] h-[300px] border mt-10 mb-10 bg-white hover:shadow-2xl card'>
        <div className='w-[91%] ml-3 h-[70%] mt-2 border border-black'>
          <img src={password} className='w-full h-full' alt=''/>
        </div>
        <p className='text-center pt-10 tracking-widest'>Password Generator</p>
      </div>
    </a>
     </div>
   </div>
  )
}

export default Projects;
