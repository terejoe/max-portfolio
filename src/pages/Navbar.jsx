import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuGridR } from "react-icons/cg";
import logoIcon from '../assets/logo.png';


export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#191932] text-white z-10'>

      <div className='flex justify-between w-4/5 items-center mx-auto border-[#343B41] border-b-2 h-full'>
        <div className=''>
          <img src={logoIcon} alt ='Logo Icon' fill="white"></img>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex'>
          <li className='mr-6 text-[#E3E5E8] hover:text-[#a7a7a7] text-sm uppercase cursor-pointer'><a href='#projects'>Projects</a></li>
          <li className='mr-6 text-[#E3E5E8] hover:text-[#a7a7a7] text-sm uppercase cursor-pointer'><a href="#about">About Me</a></li>
          <li className='mr-6 text-[#E3E5E8] hover:text-[#a7a7a7] text-sm uppercase cursor-pointer'><a href="#work-experience">Work Experience</a></li>
          <li className='mr-6 text-[#E3E5E8] hover:text-[#a7a7a7] text-sm uppercase cursor-pointer'><a href="#contact">Contact Me</a></li>
          <li className='mr-6 text-[#E3E5E8] hover:text-[#a7a7a7] text-sm uppercase cursor-pointer'><a href="#blog">My Blog</a></li>
        </ul>
      </div>
      
      {/* Hamburger Menu */}
      <div onClick = {handleClick} className='md:hidden fixed right-8 cursor-pointer'>
        {!nav &&  <CgMenuGridR style={{color:"#1469FF" }} size={35}/>}
      </div>

      {/* Hamburger Menu Items */}
      <ul className = {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#191932] flex flex-col justify-center items-center text-white'}>
        <li><FaTimes onClick = {handleClick} size={35} className='mx-auto cursor-pointer'/></li>
        <li className='py-6 text-4xl uppercase cursor-pointer'><a onClick = {handleClick} href="#projects">Projects</a></li>
        <li className='py-6 text-4xl uppercase cursor-pointer'><a onClick = {handleClick} href="#about">About Me</a></li>
        <li className='py-6 text-4xl uppercase cursor-pointer'><a onClick = {handleClick} href="#work-experience">Work Experience</a></li>
        <li className='py-6 text-4xl uppercase cursor-pointer'><a onClick = {handleClick} href="#contact">Contact Me</a></li>
        <li className='py-6 text-4xl uppercase cursor-pointer'><a onClick = {handleClick} href="#blog">My Blog</a></li>
      </ul>
      
    </div>
  )
}