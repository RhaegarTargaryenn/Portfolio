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
    </div>
  );
}

export default App;
