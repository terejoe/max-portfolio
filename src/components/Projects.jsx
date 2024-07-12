import React from 'react';
import { LuFolderDot } from "react-icons/lu";
import { RiArrowRightUpFill } from 'react-icons/ri';  
import { Link } from 'react-scroll';


export default function Projects() {
  return (
    <div name ='projects' className='w-full md:h-screen bg-[#1E1E37]'>
      <div className=' mx-auto flex flex-col pt-20 pb-10 justify-center w-full h-full px-2'>
        <div className='text-center'>
          <p className='md:text-9xl text-6xl text-[#51516A] league-spartan-bold mb-2'>Selected Projects</p>
        </div>

        <div className='flex md:pl-32 pl-2 flex-row gap-3 overflow-x-hidden'>
          
          <div className='border-[#97A1AB] border-2 justify-center items-center w-[350px] h-[320px] shrink-0'>
            <div className='p-6'>
              <LuFolderDot size={30} style={{color:"#E3E5E8" }} className='mb-2'/>
              <p className='league-spartan-bold text-2xl text-white mb-1'>Super Drive</p>
              <p className='leading-6 text-sm md:text-base text-[#ADB5BD]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sapien, gravida varius enim posuere tortor, lacus. Viverra orci euismod amet, id. Magna mi lacus sapien lorem. Arcu massa non dolor, egestas scelerisque eu. </p>              
            </div>

            <Link  to="" smooth={true} duration={500}><button className='text-[#1469FF] group border-2 px-6 py-3 flex items-center uppercase text-sm mx-4 border-none mb-4'>View Project<span className='group-hover:rotate-90 duration-300'><RiArrowRightUpFill className='ml-3' size={18}/></span></button></Link>
          </div>

          <div className='border-[#97A1AB] border-2 justify-center items-center w-[350px] h-[320px] shrink-0'>
            <div className='p-6'>
              <LuFolderDot size={30} style={{color:"#E3E5E8" }} className='mb-2'/>
              <p className='league-spartan-bold text-2xl text-white mb-1'>Super Drive</p>
              <p className='leading-6 text-sm md:text-base text-[#ADB5BD]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sapien, gravida varius enim posuere tortor, lacus. Viverra orci euismod amet, id. Magna mi lacus sapien lorem. Arcu massa non dolor, egestas scelerisque eu. </p>              
            </div>

            <Link  to="" smooth={true} duration={500}><button className='text-[#1469FF] group border-2 px-6 py-3 flex items-center uppercase text-sm mx-4 border-none mb-4'>View Project<span className='group-hover:rotate-90 duration-300'><RiArrowRightUpFill className='ml-3' size={18}/></span></button></Link>
          </div>

          <div className='border-[#97A1AB] border-2 justify-center items-center w-[350px] h-[320px] shrink-0'>
            <div className='p-6'>
              <LuFolderDot size={30} style={{color:"#E3E5E8" }} className='mb-2'/>
              <p className='league-spartan-bold text-2xl text-white mb-1'>Super Drive</p>
              <p className='leading-6 text-sm md:text-base text-[#ADB5BD]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sapien, gravida varius enim posuere tortor, lacus. Viverra orci euismod amet, id. Magna mi lacus sapien lorem. Arcu massa non dolor, egestas scelerisque eu. </p>              
            </div>

            <Link  to="" smooth={true} duration={500}><button className='text-[#1469FF] group border-2 px-6 py-3 flex items-center uppercase text-sm mx-4 border-none mb-4'>View Project<span className='group-hover:rotate-90 duration-300'><RiArrowRightUpFill className='ml-3' size={18}/></span></button></Link>
          </div>

          <div className='border-[#97A1AB] border-2 justify-center items-center w-[350px] h-[320px] shrink-0'>
            <div className='p-6'>
              <LuFolderDot size={30} style={{color:"#E3E5E8" }} className='mb-2'/>
              <p className='league-spartan-bold text-2xl text-white mb-1'>Super Drive</p>
              <p className='leading-6 text-sm md:text-base text-[#ADB5BD]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sapien, gravida varius enim posuere tortor, lacus. Viverra orci euismod amet, id. Magna mi lacus sapien lorem. Arcu massa non dolor, egestas scelerisque eu. </p>              
            </div>

            <Link  to="" smooth={true} duration={500}><button className='text-[#1469FF] group border-2 px-6 py-3 flex items-center uppercase text-sm mx-4 border-none mb-4'>View Project<span className='group-hover:rotate-90 duration-300'><RiArrowRightUpFill className='ml-3' size={18}/></span></button></Link>
          </div>
          
        </div>
      </div>


    </div>
  )
}