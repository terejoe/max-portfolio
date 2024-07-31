// import potrait from '../assets/potrait.jpg'

export default function About() {
  return (
    <div id='about'className='w-full bg-[#191932]'>
      <div className='flex flex-col justify-center items-center w-full h-full text-center mx-auto px-2 pt-20'>

        <div className=''>
          <p className='md:text-8xl text-6xl text-[#51516A] monument-extended mb-2'>About Me</p>
        </div>
        

        <div className='max-w-[1000px] w-full grid md:grid-cols-2 px-4'>

          <div className=''>
            {/* <img src={potrait} alt='Potrait' className='h-96 w-68'/> */}
          </div>

          <div className='mt-6 m-auto'>
            <p className='text-left md:text-4xl text-3xl monument-extended text-white'>You can call me Max.</p>
            <p className='mt-2 text-[#ADB5BD] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare lobortis dictum ultrices nec diam. Elementum, nisl lectus vel et. Risus at urna, tristique est magna ornare ipsum interdum nulla. Tempus, fames ullamcorper tempus eget. Eget sed sit mollis ipsum parturient vel condimentum. Lectus ultrices tortor integer porttitor.  </p>
            
            <p className='mt-3 text-[#ADB5BD] text-left'>Gravida ac nec, neque, sed urna convallis vitae aliquam sit. Suspendisse ut pulvinar volutpat in urna vestibulum. Magna tincidunt scelerisque lectus ultrices fermentum, condimentum. Quis consectetur lacus enim porttitor. Mauris, et nisl vel risus duis ultrices sit nunc. Bibendum laoreet vel nisi, urna ut. I am available for your next project.
            </p>

            <p className='mt-3 text-[#ADB5BD] text-left'>I am available for your next project
            </p>

            <div className='mt-4 text-center flex justify-start mb-4'>
              <ul className='flex text-[#156AFF]'>    
                <li className='uppercase text-sm lato-bold flex rounded-md'>
                  <a href='https://github.com/kellslte'>Github</a><span className='ml-2'> | </span>
                </li> 
                <li className='mx-2 uppercase text-sm lato-bold flex rounded-md'>
                  <a href='https://x.com/kellslte'>Twitter</a><span className='ml-2'> | </span>
                </li> 
                <li className='mx-2 uppercase text-sm lato-bold flex rounded-md'>
                  <a href='https://linkedin.com/in/max-otifavour'>LinkedIn</a><span className='ml-2'> | </span>
                </li> 
                <li className='mx-2 uppercase text-sm lato-bold flex rounded-md'>
                  <a href='mailto:maxotif@gmail.com'>Mail Me</a>
                </li> 
              </ul>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

 