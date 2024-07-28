import React, { useState } from 'react';
import BlogCard from './BlogCard'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { RiGithubLine } from 'react-icons/ri';
import ModalBlog from './ModalBlog';
import { BlogList } from '../pages/Blog/data';

export default function BlogPage({title}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () =>{
    setIsModalOpen(true)
  }

  const closeModal = () =>{
    setIsModalOpen(false);
  }

  return (
    <div id='blog' className='w-full bg-[#191932]'>
      <div className='mx-auto flex flex-col pt-20 pb-10 justify-center w-full h-full px-6'>

        <div className='md:pl-32 pl-4'>
          <p className='md:text-8xl text-4xl text-[#51516A] league-spartan-bold mb-2'>{title}</p>
        </div>

        <div className='flex md:ml-32 ml-2 flex-row overflow-x-auto swiper pb-2 gap-4'>
          {BlogList.map((blog) => (
            <BlogCard title={blog.title} text={blog.text} />
          ))}
          
        </div>

        <div className='mt-8 md:mx-32 mx-4'>
          <button onClick={openModal} className='text-[#1469FF] border-2 px-6 py-3 flex w-max items-cente mb-6 border-[#1469FF] uppercase text-sm'> View All Blogs</button>
        </div>

        <ModalBlog isClose={closeModal} isOpen={isModalOpen}/>
        

        <div className='mx-auto'>

          <ul className='flex md:hidden gap-4'>
            <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'>
            <a href="https://x.com/kellslte"><FaXTwitter size={20} className='fill-white'/></a></li> 

            <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'><a href='https://linkedin.com/in/max-otifavour'><FaLinkedinIn size={20} className='fill-white'/></a></li>

            <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'><a href='https://github.com/kellslte'><RiGithubLine size={22} className='fill-white'/></a></li>
          </ul>

          <p className='leading-6 text-sm md:text-base text-[#ADB5BD] mt-6'>Designed by <span className='text-white'>Prince Chijoke</span></p>
        </div>

      </div>
    </div>

  )
}
