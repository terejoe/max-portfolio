import React from 'react'
import BlogCard from '../components/BlogCard'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { RiGithubLine } from 'react-icons/ri'
import { TbMailCheck } from 'react-icons/tb'

export default function Blog() {
  return (
    <div name='blog'className='w-full bg-[#191932]'>
      <div className='mx-auto flex flex-col pt-20 pb-10 justify-center w-full h-full px-2'>

        <div className='md:pl-32'>
          <p className='md:text-8xl text-6xl text-[#51516A] league-spartan-bold mb-2'>My Blog</p>
        </div>

        <div className='flex md:ml-32 ml-2 flex-row overflow-x-auto swiper pb-2 gap-4'>

          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          
        </div>

        <div className='mt-8 mx-32'>
          <button className='text-[#1469FF] border-2 px-6 py-3 flex w-max items-cente mb-6 border-[#1469FF] uppercase text-sm'> View All Blogs</button>
        </div>
        

        <div className='mx-auto'>

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
