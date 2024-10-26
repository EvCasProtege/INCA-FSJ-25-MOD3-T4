import React from 'react';
import { useState } from 'react';
import logo from '../../assets/logo/codeeducation.png'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const[nav,setNav]= useState(false)

    const handleNav =() =>{
        setNav(!nav)

    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white'>
   <h1 className='w-full text-3xl font-bold text-[#2eadaf]'> Code Education</h1>
    <ul className='hidden md:flex'>
        <li className='p-4'>Inicio</li>
        <li className='p-4'>Usuarios</li>
        <li className='p-4 '>BootCamps</li>
        <li className='p-4 '>Dashboard</li>
    </ul>
    <div onClick={handleNav} className='block md:hidden'>

{!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]': 'fixed left-[-100%]'}>
    <h1 className='w-full text-3xl font-bold text-[#04dbde] m-4'> Code Education</h1>
        <ul className='uppercase p-4 '>
        <li className='p-4 border-b border-gray-600'>Inicio</li>
        <li className='p-4 border-b border-gray-600'>Usuarios</li>
        <li className='p-4 border-b border-gray-600 '>BootCamps</li>
        <li className='p-4 border-b border-gray-600'>Dashboard</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
