import { GoArrowUpRight } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { FaArrowDownLong } from "react-icons/fa6";


export default function Home() {  
  return (
    <div className='w-full h-screen bg-[#191932]'>

      <div className='max-w-[900px] md:pl-48 px-6 flex justify-center text-left flex-col h-full pt-20'>
        <p className='md:text-7xl text-4xl text-[#E3E5E8] mb-4 monument-extended'>Hey, I'm Max.</p>

        <p className='text-[#ADB5BD] lato-regular text-left mb-6 leading-7'>
        A full-stack developer takes the hassle out of developing applications. With a full-stack developer, there is the added benefit of versatility and dexterity.<br/>

        Having one person who can build across the board is a boon because you get to have two developers for slightly more than the price of one.<br/>

        Working as a backend developer has been a fulfilling role for the past 6 plus years. I've seen growth over the years and it's been great being able to understand how web systems work progressively.<br/>

        The work is tedious but rewarding while giving me a God's eye view of the entire application.</p>
        
        <a href=""><button className='text-[#1469FF] group border-2 px-6 py-3 flex items-center my-2 border-[#1469FF] uppercase text-sm'>View Resume<GoArrowUpRight className='ml-3' size={18}/></button></a>

      </div>

      <div className='bottom-0 hidden md:block relative'>
        <div className='left-0 bottom-0 absolute px-40 py-6'>
        <a href="#projects"><FaArrowDownLong size={30} className='fill-[#ADB5BD] bounce cursor-pointer'/></a>
        </div>

        <ul className='bottom-0 end-0 absolute pr-20'>
          <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'>
          <a href="https://x.com/kellslte"><FaXTwitter size={20} className='fill-white'/></a></li> 

          <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'><a href='https://linkedin.com/in/max-otifavour'><FaLinkedinIn size={20} className='fill-white'/></a></li>

          <li className='mx-2 mb-2 bg-blue-600 w-[30px] h-[30px] items-center justify-center flex rounded-full'><a href='https://github.com/kellslte'><RiGithubLine size={22} className='fill-white'/></a></li>

          <div className='border-[#343B41] h-[120px] w-px border-2 mx-5'></div>

        </ul>
      </div>
    </div>
  )
}
