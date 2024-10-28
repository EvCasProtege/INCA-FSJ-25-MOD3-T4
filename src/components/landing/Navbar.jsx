import React from 'react';
import { useState } from 'react';
import logo from '../../assets/logo/codeeducation.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)

    }

    return (
        <header className="bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='flex justify-between items-center h-24'>
                    <h1 className=' text-3xl font-bold text-[#2eadaf]'> Code Education</h1>
                    <nav className="hidden md:flex space-x-4">
                        <NavLink to="/inicio" className="text-white hover:text-[#2eadaf] px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-gray-700 text-[#2eadaf]">Inicio</NavLink>
                        <NavLink to="/registro" className="text-white hover:text-[#2eadaf] px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-gray-700 text-[#2eadaf]">Usuarios</NavLink>
                        <NavLink to="/bootcamps" className="text-white hover:text-[#2eadaf] px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-gray-700 text-[#2eadaf]">BootCamps</NavLink>
                        <NavLink to="/dashboard" className="text-white hover:text-[#2eadaf] px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-gray-700 text-[#2eadaf]">Dashboard</NavLink>
                        <NavLink to="/login" className="text-white px-3 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700">Cerrar Sesion</NavLink>
                    </nav>

                <div onClick={handleNav} className='md:hidden'>

                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]' : 'fixed left-[-100%]'}>
                    {/* <h1 className='w-full text-3xl font-bold text-[#2eadaf] m-4'> Code Education</h1> */}
                    <ul className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <NavLink to="/inicio" activeClassName="active-link"> <li className='p-4 border-b border-gray-600'>Inicio</li></NavLink>
                        <NavLink to="/registro"><li className='p-4 border-b border-gray-600'>Usuarios</li></NavLink>
                        <NavLink to="/bootcamps"><li className='p-4 border-b border-gray-600 '>BootCamps</li></NavLink>
                        <NavLink to="/DashboardContainer"><li className='p-4 border-b border-gray-600'>Dashboard</li></NavLink>
                        <NavLink to="/login" className="text-white hover:text-[#c9f94e] block px-3 py-2 rounded-md text-base font-medium bg-red-600 hover:bg-red-700">Cerrar Sesion</NavLink>
                    </ul>
                </div>
            </div>
                
            </div>
        </header>
    )
}
