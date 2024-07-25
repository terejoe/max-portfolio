import React from 'react';
import Navbar from './Navbar';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaArrowLeftLong, FaCirclePlay, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function BlogPost() {
  return (
    <>
      <Navbar/>
      <div className='w-full h-screen bg-[#191932]'>
        <div className='pt-28 md:px-40 px-8'>

          <div className='md:flex md:justify-between'>
            <Link to="/"><button className='text-[#1469FF] border px-6 py-3 flex w-max items-cente mb-6 border-[#1469FF] uppercase text-sm'><FaArrowLeftLong className='mr-4 mt-0.5 inline' size={18}/>Back Home</button></Link>

            <div className='flex md:gap-10 gap-4 mt-3 px-1'>
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
            <div></div>
            <div></div>
          </div>

        </div>

      </div>
    </>
  )
}
