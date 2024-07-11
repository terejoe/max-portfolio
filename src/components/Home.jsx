import React from 'react';
import { RiArrowRightUpFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { Link } from 'react-scroll';

export default function Home() {  
  return (
    <div className='w-full h-screen bg-[#191932]'>

      {/* Container */}
      <div className='max-w-[750px] md:pl-40 px-6 flex justify-center text-left flex-col h-full'>
        <p className='md:text-7xl text-4xl text-[#E3E5E8] mb-4 league-spartan-bold'>Hey, I'm Max.</p>

        <p className='text-[#ADB5BD] lato-regular text-left mb-6 leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sapien, gravida varius enim posuere tortor, lacus. Viverra orci euismod amet, id. Magna mi lacus sapien lorem. Arcu massa non dolor, egestas scelerisque eu. Sagittis nibh vitae ultrices eget amet porttitor volutpat elit. Gravida neque id sed nisi malesuada fermentum, aliquam mauris turpis.</p>
        
        <Link  to="" smooth={true} duration={500}><button className='text-[#1469FF] group border-2 px-6 py-3 flex items-center my-2 hover:bg-white border-[#1469FF] uppercase text-sm'>View Resume<span className='group-hover:rotate-90 duration-300'><RiArrowRightUpFill className='ml-3' size={18}/></span></button></Link>

        <div className='right-0 bottom-0 hidden md:block fixed p-28'>
          <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'>
          <a href="mailto:nzeamalunkechinyere@gmail.com"><FaXTwitter size={20} className='fill-white'/></a></li> 

          <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'><a href='https://linkedin.com/in/nzeamalu-nkechinyere-9b0476192'><FaLinkedinIn size={20} className='fill-white'/></a></li>

          <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'><a href='https://github.com/terejoe'><RiGithubLine size={22} className='fill-white'/></a></li>

          <div className='border-[#343B41] h-[120px] w-px border-2 fixed mx-5'></div>
        </div>
        
      </div>
    </div>
  )
}
