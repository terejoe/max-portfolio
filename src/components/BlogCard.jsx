import React from 'react'
import { RiArrowRightUpFill } from 'react-icons/ri'
import { Link } from 'react-scroll'

export default function BlogCard() {
  return (
    <div className='border-[#97A1AB] border-2 justify-center items-center w-[300px] h-[350px] md:w-[500px] md:h-[300px] shrink-0 mt-6'>
      <div className='p-6'>
        {/* <img src={potrait} alt='Potrait' className='h-96 w-68'/> */}
        <p className='league-spartan-bold text-lg text-left text-white mb-1'>Benefits of writing PHP as a backend framework.</p>
        <p className='leading-6 text-sm md:text-base text-[#ADB5BD]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sapien, gravida varius enim posuere tortor, lacus. Viverra orci euismod amet, id. Magna mi lacus sapien lorem. Arcu massa non dolor, egestas scelerisque eu. </p>              
      </div>

      <Link to="" smooth={true} duration={500}><button className='text-blue-600 font-bold group border-2 px-6 py-3 flex items-center uppercase text-sm border-none mb-4'>Read More<span className='group-hover:rotate-90 duration-300'><RiArrowRightUpFill className='ml-3' size={18}/></span></button></Link>
    </div>
  )
}
