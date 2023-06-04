import React,{useState} from 'react'

import {HiOutlineMenu} from "react-icons/hi"
import {MdOutlineCancelScheduleSend} from "react-icons/md"


const NavBar = () => {

  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-6 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className=' hidden md:flex'>
        <li className='p-4 hover:bg-[#00df9a]  '>Home</li>
        <li className='p-4 hover:bg-[#00df9a] '>Company</li>
        <li className='p-4 hover:bg-[#00df9a] '>Reasources</li>
        <li className='p-4 hover:bg-[#00df9a] '>About</li>
        <li className='p-4 hover:bg-[#00df9a] '>Contact</li>
      </ul>
      <div onClick={handelNav} className='block md:hidden'>

      {nav ? <MdOutlineCancelScheduleSend size={20}/> : <HiOutlineMenu size={20} className='w-9 h-9'/>}
    
      </div>
      <div className={nav ? 'fixed top-0 left-0 w-[60%] h-full border-r  border-gray-900 bg-[#000300]' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <ul className='uppercase p-3'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Reasources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>

      </div>
    </div>
  )
}

export default NavBar