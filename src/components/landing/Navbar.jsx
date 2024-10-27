import React from 'react';
import { useState } from 'react';
import logo from '../../assets/logo/codeeducation.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)

    }

    return (
        <header>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white'>
                <h1 className='w-full text-3xl font-bold text-[#2eadaf]'> Code Education</h1>
                <ul className='hidden md:flex'>
                    <NavLink to="/landing" activeClassName="active-link"> <li className='p-4 border-b border-gray-600'>Inicio</li></NavLink>
                    <NavLink to="/registro"><li className='p-4 border-b border-gray-600'>Usuarios</li></NavLink>
                    <NavLink to="/home"><li className='p-4 border-b border-gray-600 '>BootCamps</li></NavLink>
                    <NavLink to="/DashboardContainer"><li className='p-4 border-b border-gray-600'>Dashboard</li></NavLink>
                </ul>

                <div onClick={handleNav} className='block md:hidden'>

                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#2eadaf] m-4'> Code Education</h1>
                    <ul className='uppercase p-4 '>
                        <NavLink to="/landing" activeClassName="active-link"> <li className='p-4 border-b border-gray-600'>Inicio</li></NavLink>
                        <NavLink to="/registro"><li className='p-4 border-b border-gray-600'>Usuarios</li></NavLink>
                        <NavLink to="/home"><li className='p-4 border-b border-gray-600 '>BootCamps</li></NavLink>
                        <NavLink to="/DashboardContainer"><li className='p-4 border-b border-gray-600'>Dashboard</li></NavLink>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
