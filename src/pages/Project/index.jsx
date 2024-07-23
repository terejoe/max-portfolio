import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { ProjectList } from './data';


export default function Projects() {
  return (
    <div name ='projects' className='w-full bg-[#1E1E37]'>
      <div className='mx-auto flex flex-col pt-10 pb-10 justify-center w-full h-full px-2'>
        <div className='text-center'>
          <p className='md:text-9xl text-4xl text-[#51516A] league-spartan-bold mb-6jr'>Selected Projects</p>
        </div>

        <div className='flex md:ml-32 ml-2 flex-row gap-3 overflow-x-auto swiper pb-2'>
          {ProjectList.map((project) => (
            <ProjectCard title={project.title} text={project.text} href={project.href} lang={project.lang}/>
          ))}
          
        </div>
      </div>
      

    </div> 
  )
}