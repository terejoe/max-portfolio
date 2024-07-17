import React from 'react'
import BlogCard from '../components/BlogCard'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { RiGithubLine } from 'react-icons/ri'

export default function Blog() {
  return (
    <div name='blog'className='w-full bg-[#191932]'>
      <div className='mx-auto flex flex-col pt-20 pb-10 justify-center w-full h-full px-2'>

        <div className='md:pl-32'>
          <p className='md:text-8xl text-6xl text-[#51516A] league-spartan-bold mb-2'>My Blog</p>
        </div>

        <div className='flex md:pl-32 pl-2 flex-row overflow-x-hidden gap-4'>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>

        <div className='mt-10 mx-auto'>

          <div className='flex md:hidden gap-4'>
            <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'>
            <a href="https://x.com/kellslte"><FaXTwitter size={20} className='fill-white'/></a></li> 

            <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'><a href='https://linkedin.com/in/max-otifavour'><FaLinkedinIn size={20} className='fill-white'/></a></li>

            <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'><a href='https://github.com/kellslte'><RiGithubLine size={22} className='fill-white'/></a></li>
          </div>

          <p className='leading-6 text-sm md:text-base text-[#ADB5BD] mt-2'>Designed by <span className='text-white'>Prince Chijoke</span></p>
        </div>

      </div>
    </div>
  )
}
