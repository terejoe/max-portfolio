import React from 'react';
import ProjectCard from '../components/ProjectCard';


export default function Projects() {
  return (
    <div name ='projects' className='w-full bg-[#1E1E37]'>
      <div className='mx-auto flex flex-col pt-20 pb-10 justify-center w-full h-full px-2'>
        <div className='text-center'>
          <p className='md:text-9xl text-6xl text-[#51516A] league-spartan-bold mb-2'>Selected Projects</p>
        </div>

        <div className='flex md:pl-32 pl-2 flex-row gap-3 overflow-x-hidden'>
          
          <ProjectCard title="Loiz Tours and Travels E-commerce Platform" text="This project is an e-commerce platform, and I am tasked with writing backend APIs to provide functionality for the various features on the site like, consultation booking, email delivery, payment gateway functionality. I also integrated Microsoft Teams API to generate meeting links for the consultation sessions." href="https://loiztravels.com"/>

          <ProjectCard title="Besaiem Marketplace" text="Besaiem is an e-commerce marketplace for the sale of hand-crafted goods and other services. I am tasked with leading the development team to implement the design on the frontend and corresponding backend APIs to power the functionality of the platform. I am getting this done by implementing backend APIs with Nest.js, MongoDB, with integrations to power email delivery, image uploads, and sms delivery." href="https://besaiem.com"/>

          <ProjectCard title="Gardeners For Africa School Management System" text="This system caters to different primary and secondary schools and as such needs constant maintenance and implementation of new features as requested by the different schools. Constant work is being done on the application to extend the functionality. I have implemented a fee management system for the different schools, attendance taking, results collation, and a user management system for the various users on the system." href="https://gardeners4africa.com"/>

          <ProjectCard title=" Yana Finance Partners Dashboard" text="Brief: The partners dashboard is an inhouse system for helping Yana’s partners manage their credit line. It facilitates every activity that will be carried out by the partners on their account with Yana. I worked on developing the APIs that provided the functionalities defined in the product requirements dashboard. I wrote APIs for functionalities like Credit requests, customer verification, withdrawals and loan repayments." href=""/>
          
        </div>
      </div>


    </div>
  )
}