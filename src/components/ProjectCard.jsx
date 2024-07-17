import React from 'react';
import { LuFolderDot } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard({title, text, href}) {
  return (
    <div className='border-[#97A1AB] border-2 justify-center items-center w-[350px] h-[400px] shrink-0'>
      <div className='p-6'>
        <LuFolderDot size={30} style={{color:"#E3E5E8" }} className='mb-2'/>
        <p className='league-spartan-bold text-xl text-white mb-1'>{title}</p>
        <p className='leading-6 text-sm text-[#ADB5BD]'> {text} </p>              
      </div>

      <button className='text-[#1469FF] px-6 py-3 flex items-center mx-4 border-none uppercase text-sm'><a href={href}>View Project<GoArrowUpRight className='ml-4 inline' size={18}/></a></button>

    </div>
  )
}
