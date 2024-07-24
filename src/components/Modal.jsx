import React, { useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'
import { LuFolderDot } from 'react-icons/lu'

export default function Modal({title, text, href, lang,  isOpen, closeModal}) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside =  (event) => {
      if(modalRef.current && !modalRef.current.contains(event.target)){
        closeModal();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    
  }, [closeModal]);

  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div  ref={modalRef} className='bg-[#191932] fixed w-[350px] md:w-[550px]'>
        <div className='justify-center items-center'>
          <div className='p-8'>
            <div className='flex gap-4 mb-1'>
              <LuFolderDot size={25} style={{color:"#E3E5E8" }} className='mb-2'/>
              <p className='league-spartan-bold text-xl text-white'>{title}</p>
              <FaTimes onClick={closeModal} size={20} className=' fill-[#ADB5BD] top-2 right-2 absolute  cursor-pointer'/>
            </div>

            <div>
              <p className='league-spartan-bold text-xl text-white mb-1'>Languages used on project:</p>
              <p className='leading-6 text-sm text-[#ADB5BD]'>{lang}</p> 
            </div>

            <div>
              <p className='league-spartan-bold text-xl text-white mb-1'>Project Brief:</p>
              <p className='leading-6 text-sm text-[#ADB5BD]'> {text} </p> 
            </div>
            
          </div>
          
          <button className='text-[#1469FF] px-6 py-3 flex items-center mx-1 border-none uppercase text-sm mb-2'><a href={href}>View Live Project<GoArrowUpRight className='ml-4 inline' size={18}/></a></button>
          </div>
      </div>

    </div>
  )
}
