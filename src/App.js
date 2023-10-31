import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Skiils from './components/Skiils';
import ContactMe from './components/ContactMe';
import CopyRight from './components/CopyRight';
import 'aos/dist/aos.css';
import AOS from 'aos';
import {BiSolidRightArrow} from 'react-icons/bi';

function App() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      // You can configure the options for the animation here (optional)
      // For example, you can set the duration, easing, and more.
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      <Header />
      <AboutUs />
      <Projects />
      <Skiils />
      <ContactMe />
      <CopyRight />

      <div className='mt-10 border flex justify-between w-[98%] mx-auto px-5 py-5 bg-blue-400'>
          <div className='flex'>
           <button className='border border-black rounded-lg'><BiSolidRightArrow/></button>
           <div className='ml-2'>Root</div>
           </div>

           <div className='border border-black rounded-lg'>
            <button>Add Child</button>
           </div> 

      </div>
    </div>
  );
}

export default App;
