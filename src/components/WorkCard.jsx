import React from 'react';
import { HiOutlineBriefcase } from "react-icons/hi";

export default function WorkCard() {
  return (
    <div className='col-span-2'>
      <div className='mt-4 flex gap-6 md:px-4 px-2'>
        <HiOutlineBriefcase size={30} style={{color:"#E3E5E8" }}/>
        
        <div className='flex justify-between w-full text-white'>
          <p className='league-spartan-bold md:text-2xl'>Enugu State Tech Hub</p>
          <p className='league-spartan-bold md:text-xl'>2019 -2022</p>
        </div>

      </div>


      <div className='md:pl-20 pl-10 text-[#ADB5BD] pr-2'>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna et facilisis eleifend egestas iaculis.</li>
        <li> Molestie neque varius vitae tristique at scelerisque urna magna suscipit. Sollicitudin duis turpis commodo eget eget semper. </li>
        <li>Dui, mi laoreet vulputate aliquet sagittis a tortor, nullam. Sed posuere varius ornare purus maecenas faucibus et.</li>

      </div>

    </div>
  )
}
