import React from 'react'
import workInfo from './Workdetails'


function Work() {
  return (
    <>
      <section className='w-full h-full relative'>
        <main className='w-[80%] h-[80%] py-8 mx-auto my-5 bg-gradient-to-b from-primary via-primary via-40% to-secondary to-40%'>
          <h3 className='text-center text-2xl text-white font-serif font-bold'>HOW IT WORKS</h3>
          <div className='flex justify-evenly w-full h-full mt-10'>
            {
              workInfo.map((work,index) =>
              (
                <div className="pt-3 pb-5 px-1 flex flex-col items-center bg-white w-[20%] h-[80%] relative" key={index}>
                  <span className='bg-white text-center w-16 py-4 relative bottom-[2.5rem] rounded-full text-primary font-bold text-lg'>
                    {index+1}
                  </span>
                  <h1 className='mb-4 font-bold'>{work.header}</h1>
                  <p className='text-center '>{work.description}</p>
                  <div className="flex-grow"></div>
                  <div > <img src={work.src} alt="fghg" className="w-20 h-20 object-contain" /></div>
                 
                </div>

              ))

              
            }
          
          </div>
        </main>
      </section>
    </>
  )
}

export default Work
