import React from 'react'
import { TbMailCheck } from 'react-icons/tb'
import { Link } from 'react-scroll'

export default function Contact() {
  return (
    <>
      <div className='w-full h-[130px] bg-[#191932]'>
        <div className='p-8 flex overflow-x-hidden'>
          <p className='text-7xl text-[#51516A] league-spartan-bold shrink-0'>I write PHP, Node Js, Golar</p>
        </div>
      </div>

      <div name='contact'className='w-full bg-[#1E1E37]'>
        <div className='flex flex-col justify-center w-full h-full mx-auto md:px-20 px-6'>
          <div className=''>
            <p className='md:text-5xl text-xl text-white text-left league-spartan-bold my-8'>Got an idea you would like us to talk about?</p>
          </div>

          {/* Desktop View */}
          <button className='text-[#1469FF] border-2 px-6 py-3 w-max items-cente mb-6 border-[#1469FF] uppercase text-sm hidden md:flex'><a href='mailto:maxotif@gmail.com'> Shoot Me a Mail<TbMailCheck className='ml-3 inline' size={18}/></a></button>

          {/* Mobile View */}
          <button className='text-[#1469FF] border-2 px-6 py-3 flex w-max items-cente mb-6 border-[#1469FF] uppercase text-sm md:hidden'><a href=""> View Resume<TbMailCheck className='ml-3 inline' size={18}/></a></button>

        </div>
      </div>

    </>
  )
}
