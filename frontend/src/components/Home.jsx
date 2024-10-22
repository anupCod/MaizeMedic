import React,{useRef,useState} from 'react'
import imgUpload from '../assets/imageUpload.svg'

function Home() {
  const [fileName,setFileName] = useState('Upload file')
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if(file){
      setFileName(file.name)
      console.log('Selected file:',file);
    }
  }

  return (
    <>
        <section className='w-full flex justify-center my-12 z-2'>
            <form className='w-[26rem] h-[15rem] rounded-md shadow-neumorphism flex flex-col items-center justify-center bg-slate-100'>
                <div className='flex items-center'>
                  <img src={imgUpload} alt="image-upload-icon" className='cursor-pointer' onClick={handleImageClick} />
                  <p className='mx-3 font-semibold'>{fileName}</p>
                  <input type="file" name="myfile" className='hidden' ref={fileInputRef} onChange={handleFileChange} />
                </div>
                <input type="submit" value="Upload" className='border-0 mt-5 px-4 py-[0.4rem] bg-primary font-semibold text-white rounded-md cursor-pointer' />
            </form>
        </section>
    </>
  )
}

export default Home
