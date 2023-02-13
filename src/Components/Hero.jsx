import React from 'react'

const Hero = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#070707] text-gray-300 myImage bg-no-repeat bg-cover bg-[60%] md:bg-center relative'>
        <div className='group flex flex-col justify-center max-w-[1000px] h-full mx-auto px-8 z-20'>
            <p className='group-hover:scale-105 duration-1000 text-[1.5rem] md:text-[2rem] z-20 italic text-gray-600'>Hi, I am</p>
            <p className='group-hover:scale-105 duration-1000 text-[3rem] md:text-[5rem] z-20 myName'><span className='text-red-700 text-[3rem] md:text-[5rem]'>R</span>onniel <span className='text-blue-700 text-[3rem] md:text-[5rem]'>B</span>esara</p>
            <p className='group-hover:scale-105 duration-1000 text-[1.5rem] md:text-[2rem] z-20 italic text-gray-600'>I am a Programmer & a Web Developer</p>
        </div>
    </div>
  )
}

export default Hero