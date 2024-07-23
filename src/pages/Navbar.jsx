import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuGridR } from "react-icons/cg";
import logoIcon from '../assets/logo.png';
import { Link } from 'react-scroll';



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
          <li className='mr-6 hover:text-[#a7a7a7] text-sm uppercase cursor-pointer'><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li className='mr-6 hover:text-[#a7a7a7] text-sm uppercase cursor-pointer'><Link to="about" smooth={true} duration={500}>About Me</Link></li>
          <li className='mr-6 hover:text-[#a7a7a7] text-sm uppercase cursor-pointer'><Link to="work-experience" smooth={true} duration={500}>Work Experience</Link></li>
          <li className='mr-6 hover:text-[#a7a7a7] text-sm uppercase cursor-pointer'><Link to="contact" smooth={true} duration={500}>Contact Me</Link></li>
          <li className='mr-6 hover:text-[#a7a7a7] text-sm uppercase cursor-pointer'><Link to="blog" smooth={true} duration={500}>My Blog</Link></li>
        </ul>
      </div>
      
      {/* Hamburger Menu */}
      <div onClick = {handleClick} className='md:hidden fixed right-8 cursor-pointer'>
        {!nav &&  <CgMenuGridR style={{color:"#1469FF" }} size={35}/>}
      </div>

      {/* Hamburger Menu Items */}
      <ul className = {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#191932] flex flex-col justify-center items-center text-white'}>
        <li><FaTimes onClick = {handleClick} size={35} className='mx-auto cursor-pointer'/></li>
        <li className='py-6 text-4xl uppercase cursor-pointer'><Link onClick = {handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li className='py-6 text-4xl uppercase cursor-pointer'><Link onClick = {handleClick} to="about" smooth={true} duration={500}>About Me</Link></li>
        <li className='py-6 text-4xl uppercase cursor-pointer'><Link onClick = {handleClick} to="work-experience" smooth={true} duration={500}>Work Experience</Link></li>
        <li className='py-6 text-4xl uppercase cursor-pointer'><Link onClick = {handleClick} to="contact" smooth={true} duration={500}>Contact Me</Link></li>
        <li className='py-6 text-4xl uppercase cursor-pointer'><Link onClick = {handleClick} to="blog" smooth={true} duration={500}>My Blog</Link></li>
      </ul>
      
    </div>
  )
}