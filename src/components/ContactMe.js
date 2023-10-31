import React, { useRef, useState , useEffect } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  const form = useRef();
  const [inputs, setInputs] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2l9047q', 'template_2do37o8', form.current, 'WvBuavvimXIz4GbUa')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sent successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setInputs({
            user_name: '',
            user_email: '',
            user_message: '',
          });
        },
        (error) => {
          console.error(error.text);
          toast.error('Failed to send email!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className='flex flex-col items-center ' data-aos="flip-down">
         <div className="content pt-10 pl-10 underline ">
           <h2 className="text-shadows text-[15px] sm:text-[25px] font-extrabold">Contact Me</h2>
          </div>



      <form ref={form} className='flex flex-col w-96 mt-6 space-y-4 ' onSubmit={sendEmail}>
        <label className='text-lg tracking-widest font-bold'>Name</label>
        <input
          type='text'
          name='user_name'
          value={inputs.user_name}
          onChange={handleInputChange}
          className='border border-gray-600 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400 shadow-xl'
        />
        <label className='text-lg tracking-widest font-bold'>Email</label>
        <input
          type='email'
          name='user_email'
          value={inputs.user_email}
          onChange={handleInputChange}
          className='border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 shadow-xl'
        />
        <label className='text-lg tracking-widest font-bold'>Message</label>
        <textarea
          name='user_message'
          rows='4'
          value={inputs.user_message}
          onChange={handleInputChange}
          className='border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 shadow-xl'
        ></textarea>
        <button type='submit' className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Send a message</span>
</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
