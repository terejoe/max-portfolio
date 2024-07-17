import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

export default function Experience() {
  return (
    <div name='about'className='w-full bg-[#1E1E37]'>
      <div className='flex flex-col justify-center items-center w-full h-full mx-auto px-2'>

        <div className=''>
          <p className='text-4xl md:text-9xl text-[#51516A] league-spartan-bold mb-2 mt-2'>Work Experience</p>
        </div>
        

        <div className='md:w-4/5 w-full md:grid md:grid-cols-3 mb-8'>

          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>

          <div className='hidden md:block'>
            {/* <img src={potrait} alt='Potrait' className='h-96 w-68'/> */}
          </div>
          
        </div>
        
      </div>

    </div>
  )
}

 