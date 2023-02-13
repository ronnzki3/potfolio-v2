import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'


const Navbar = () => {

    const [nav,setNav]=useState(false);

    const handleClick=()=>setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex bg-[#070707] text-gray-300 justify-between px-4 py-5 z-40'>
        <div className='group z-50 hover:text-gray-600 cursor-pointer block ml-[0.5rem] mt-[-0.3rem]'>
                <Link to="about" smooth={true} duration={1000}>
                <span className='group-hover:text-red-300 text-[2rem] font-semibold rrtxt inline-block text-red-700'>R</span><span className='group-hover:text-blue-400 bbtxt text-[2rem] font-semibold ml-[-0.4rem] text-blue-700 inline-block'>B</span>
                </Link>
        </div>

        <ul className='hidden md:flex'>           
            <li>
                <Link to="about" smooth={true} duration={1000}>
                Home
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={1000}>
                Skills
                </Link>
            </li>
            <li>
                <Link to="works" smooth={true} duration={1000}>
                Works
                </Link>
            </li>
           
            <li>
                <Link to="contact" smooth={true} duration={1000}>
                Contact
                </Link>
            </li>          
        </ul>

        {/* hamburger icon */}
        <div onClick={handleClick} className='md:hidden z-10 text-2xl cursor-pointer'>
            {!nav ?  <FaBars/> : <FaTimes />}
           
        </div>

        {/* mobile menu  */}
        <ul className={!nav ? 'hidden' : 'absolute left-0 top-0 w-full h-screen flex flex-col bg-[#070707] text-3xl  justify-center items-center'}>
            <li className='py-5'>
                <Link to="about" smooth={true} duration={1000} onClick={handleClick}>
                About
                </Link>
            </li>
            <li className='py-5'>
                 <Link to="skills" smooth={true} duration={1000} onClick={handleClick}>
                Skills
                </Link>
            </li>
            <li className='py-5'>
                 <Link to="works" smooth={true} duration={1000} onClick={handleClick}>
                Works
                </Link>
            </li>
            
            <li className='py-5'>
                <Link to="contact" smooth={true} duration={1000} onClick={handleClick}>
                Contact
                </Link>
            </li>                
        </ul>


    </div>
  )
}

export default Navbar