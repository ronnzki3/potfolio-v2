import React from 'react'
import {FaGithub,FaGoogle,FaFacebookF,FaLinkedin,FaTwitter} from 'react-icons/fa'


const Platforms = () => {
  return (
    <div className='bg-[#070707] text-gray-300'>
    <div className='max-w-[800px] mx-auto p-10'>
        <div className='flex flex-col w-full'>
            <p className='text-lg'>Connect with me:</p>
            <div className='mt-5 text-base w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                <div><a className='flex items-center hover:text-gray-500' href='https://mail.google.com/mail/u/0/?fs=1&to=ron.besara@gmail.com&su=Hey%20Ronniel&body=Have%20a%20nice%20day&bcc=ron.besara@gmail.com&tf=cm' target="_blank" rel="noreferrer"><FaGoogle size={20}/> ron.besara@gmail.com</a></div>
                <div><a className='flex items-center hover:text-gray-500' href='https://www.linkedin.com/in/ronniel-besara-bbb223114/' target="_blank" rel="noreferrer"><FaLinkedin size={20}/> LinkedIn</a></div>
                <div><a className='flex items-center hover:text-gray-500' href='https://github.com/ronnzki3' target="_blank" rel="noreferrer"><FaGithub size={20}/> Github</a></div>
                {/* <div><a className='flex items-center hover:text-gray-500' href='https://web.facebook.com/rnnlbsr' target="_blank" rel="noreferrer"><FaFacebookF size={20}/> Facebook</a></div> */}
                {/* <div><a className='flex items-center hover:text-gray-500' href='https://twitter.com/ronbes' target="_blank" rel="noreferrer"><FaTwitter size={20}/> Twitter</a></div>                 */}
            </div>
        </div>
    </div>
</div>
  )
}

export default Platforms