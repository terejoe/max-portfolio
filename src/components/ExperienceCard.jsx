import React from 'react';
import { HiOutlineBriefcase } from "react-icons/hi";

export default function ExperienceCard({role, period, tasks}) {
  return (
    <div className='col-span-10 mb-4'>
      <div className='mt-4 flex gap-6 md:px-4 px-2'>
        <HiOutlineBriefcase size={30} style={{color:"#E3E5E8" }}/>
        
        <div className='flex justify-between w-full text-white mr-2'>
          <p className='monument-extended md:text-2xl '>{role}</p>
          <p className='monument-extended md:text-xl text-sm text-right'>{period}</p>
        </div>

      </div>

      <div className='md:pl-20 pl-16 text-[#ADB5BD] mr-2 text-sm md:text-base'>
        {tasks.map((task) =>
          <li>{task}</li>
        )}
        
      </div>

    </div>
  )
}
