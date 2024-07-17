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

          <Link  to="" smooth={true} duration={500}><button className='text-[#1469FF] group border-2 px-6 py-3 flex items-center mb-6 border-[#1469FF] uppercase text-sm'>View Resume<TbMailCheck className='ml-3' size={18}/></button></Link>
        </div>
      </div>

    </>
  )
}
