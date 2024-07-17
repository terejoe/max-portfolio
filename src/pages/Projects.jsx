import React from 'react';
import ProjectCard from '../components/ProjectCard';


export default function Projects() {
  return (
    <div name ='projects' className='w-full h-screen bg-[#1E1E37]'>
      <div className='mx-auto flex flex-col pt-20 pb-10 justify-center w-full h-full px-2'>
        <div className='text-center'>
          <p className='md:text-9xl text-6xl text-[#51516A] league-spartan-bold mb-2'>Selected Projects</p>
        </div>

        <div className='flex md:pl-32 pl-2 flex-row gap-3 overflow-x-hidden'>
          
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>

          
        </div>
      </div>


    </div>
  )
}