import React from 'react';
import ExperienceCard from '../components/ExperienceCard';

export default function Experience() {
  return (
    <div name='work-experience'className='w-full bg-[#1E1E37]'>
      <div className='flex flex-col justify-center items-center w-full h-full mx-auto px-2'>

        <div className=''>
          <p className='text-4xl md:text-9xl text-[#51516A] league-spartan-bold mb-2 mt-2'>Work Experience</p>
        </div>
        
        <div className='md:w-4/5 w-full md:grid md:grid-cols-12 mb-8'>

          <ExperienceCard role="Firstclass Pilot: Junior Full Stack Developer" period=" December 2019 - June 2022" itemOne="Developed Full Stack Applications with HTML, CSS, JavaScript and Laravel PHP" itemTwo="Worked with the team lead to integrate Salesforce APIs as needed by the client" itemThree="Optimized Website Content Delivery and load times of our clients" itemFour="Resolved PHP hosting issues of our clients"/>

          <ExperienceCard role="Yana Finance: Junior Backend Developer" period=" September 2021 - February 2022" itemOne="Contributed code to the Partners Dashboard" itemTwo="Worked with the CTO to develop backend APIs for inhouse products" itemThree="OUtilized Laravel PHP to developer robust backend APIs" itemFour="Participated in debug sessions and contributed to customer support"/>

          <ExperienceCard role="Junior Backend Developer" period="October 2021 - January 2022" itemOne="Contributed code to the inhouse product" itemTwo="Utilized Node.js, GraphQL, Express and MongoDB to write backend APIs" itemThree="Worked with the CTO to develop robust backend APIs" itemFour="Implemented clean code according to the product requirements document"/>

          <ExperienceCard role="Enugu State Technology and Youth Innovation Center: Lead Backend Developer" period="June 2022 - June 2023" itemOne="Wrote clean code for the ADA SE Program LMS" itemTwo="Collaborated with the Frontend Developer to create backend APIs for the LMS" itemThree="Presided over the activities of the Engineering Team" itemFour="Led brainstorm sessions and mentored junior team members"/>

          <ExperienceCard role="Gardeners For Africa: Lead Full Stack Developer" period="February 2023 - Present" itemOne="Maintain the school management system for the various schools we support" itemTwo="Provide on demand customer support and fixes for dashboard issues" itemThree="Maintain and optimize our organization&apos;s website" itemFour="Implement new features for our school management system with Laravel"/>

          <ExperienceCard role="Loiz Tours and Travels Limited: Backend Developer" period=" May 2023 - Present" itemOne="Write clean code and implement backend APIs according to specification with Laravel PHP" itemTwo="Collaborate with the Frontend developer to implement backend APIs" itemThree="Provide on demand customer support" itemFour="Manage organization web infrastructure"/>

          <ExperienceCard role="Attueyi Coding Academy: Backend Facilitator" period="December 2023 - Present" itemOne="Tutor students in backend technologies like Node.js, Express and MongoDB" itemTwo="Provide mentorship for students" itemThree="Provide Web IT support"/>

          <ExperienceCard role="Slowgate Media: Software Developer and IT Specialist" period="February 2024 - Present" itemOne="Maintain organization IT infrastructure" itemTwo="Build client websites as specified by documentation" itemThree="Carry out tasks as assigned by my team lead"/>

          <div className='hidden md:block'>
            {/* <img src={potrait} alt='Potrait' className='h-96 w-68'/> */}
          </div>
          
        </div>
        
      </div>

    </div>
  )
}

 