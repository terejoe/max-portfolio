import React from 'react';
import Navbar from './Navbar';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaArrowLeftLong, FaCirclePlay, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { TbMailCheck } from 'react-icons/tb';
import BlogPage from '../components/BlogPage';
import DisplayArticle from '../components/DisplayArticle';

export default function BlogPost() {
  const blog = {
    title: "My other articles"
  };

  return (
    <>
      <Navbar/>
      <div className='w-full bg-[#191932]'>
        <div className='pt-28 md:px-40 px-6'>

          <div className='md:flex justify-between'>
            <Link to="/"><button className='text-[#1469FF] border px-6 py-3 flex w-max items-cente mb-6 border-[#1469FF] uppercase text-sm'><FaArrowLeftLong className='mr-4 mt-0.5 inline' size={18}/>Back Home</button></Link>

            <div className='flex md:gap-10 gap-4 my-4 px-1'>
              <div className='flex'>
                <p className='text-white mr-3 text-sm'>Listen:</p>
                <FaCirclePlay size={20} className='fill-[#1469FF]'/>
                <p className='text-[#1469FF] ml-2 text-sm'>3:02</p>
              </div>
              <div className='flex'>
                <p className='text-white text-sm mr-3'>Share this post:</p>
                <ul className='flex'>
                  <li className='mr-3 bg-blue-600 w-[23px] h-[23px] items-center justify-center flex rounded-full'><a href='https://linkedin.com/in/max-otifavour'><FaLinkedinIn size={13} className='fill-white'/></a></li>

                  <li className='bg-blue-600 w-[23px] h-[23px] items-center justify-center flex rounded-full'><a href="https://x.com/kellslte"><FaXTwitter size={13} className='fill-white'/></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <DisplayArticle/>
            <div></div>
            <div></div>
          </div>

        </div>

        <div name='contact'className='w-full bg-[#1E1E37]'>
          <div className='flex flex-col justify-center w-full h-full mx-auto md:px-36 px-6'>
            <div className=''>
              <p className='md:text-5xl text-xl text-white text-left monument-extended my-8'>Got an idea you would like us<br/>to talk about?</p>
            </div>

            {/* Desktop View */}
            <button className='text-[#1469FF] border-2 px-6 py-3 w-max items-cente mb-6 border-[#1469FF] uppercase text-sm hidden md:flex'><a href='mailto:maxotif@gmail.com'> Shoot Me a Mail<TbMailCheck className='ml-3 inline' size={18}/></a></button>

            {/* Mobile View */}
            <button className='text-[#1469FF] border-2 px-6 py-3 flex w-max items-cente mb-6 border-[#1469FF] uppercase text-sm md:hidden'><a href=""> View Resume<TbMailCheck className='ml-3 inline' size={18}/></a></button>

          </div>
        </div>

        <BlogPage title={blog.title}/>

      </div>
    </>
  )
}
