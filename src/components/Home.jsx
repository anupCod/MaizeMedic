import React from 'react'
import imgUpload from '../assets/imageUpload.svg'

function Home() {
  return (
    <>
        <section className='w-full flex justify-center my-12 z-2'>
            <form className='w-fit py-12 px-8 border-[1px] border-black rounded-md shadow-neumorphism' >
                <div className='flex items-center'>
                  <img src={imgUpload} alt="image-upload-icon" />
                  <input type="file" name="myfile" />
                </div>
                <input type="submit" value="Upload" className='border-0 mt-5 px-4 py-[0.4rem] bg-primary font-semibold text-white rounded-md cursor-pointer' />
            </form>
        </section>
    </>
  )
}

export default Home
