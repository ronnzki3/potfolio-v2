import React from 'react'

function About() {
  return (
    <div name="about" className='bg-[#ffffff] text-black'>

        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full p-4 pt-[70px]'>
            {/* <div>
            <p className='text-2xl ml-8 font-bold inline border-b-4 border-pink-300 ease-in-out duration-500'>About me</p>
            </div> */}
            <div className='flex flex-col md:flex-col mt-16 min-h-[300px] justify-center items-center'>
              <div className='myid-photo mx-auto'>             
              </div>
              <div className=' mx-auto max-w-[550px] mt-7 sm:mx-auto md:mx-0 px-5'>
                  <p className='first-letter:uppercase first-line:tracking-widest
  first-letter:text-8xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-1 first-letter:float-left text-justify'>Hi, I'm <i className='text-gray-700 font-semibold underline'>Ronniel Goyonoche Besara</i>, I'm a web developer with years of experience in both frontend and backend web development. In a nutshell, I create websites that help organizations address business challenges and meet their needs. Developed Desktop/Mobile Applications to small business owners to make it easier to manage their tasks and administrative duties. I am currently improving my backend development skills by learning various new technologies.</p>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default About