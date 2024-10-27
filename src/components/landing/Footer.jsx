import React from 'react'
import { FaDribbble,
    FaDribbbleSquare,
FaFacebook,
FaFacebookSquare,
FaGithubSquare,
FaInstagram,
FaTwitterSquare
 } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
      <h1 className='w-full text-3xl font-bold text-[#2eadaf]'> Code Education</h1>
      <p className='py-4'>Transformando carreras en tecnología con programas intensivos y orientados al mercado laboral. Síguenos en nuestras redes sociales para conocer las últimas novedades y oportunidades en el mundo tech.</p>
    
      <div className='flex justify-between md:w-[75%] my-6'>
        <FaFacebookSquare  size={30}/>
        <FaInstagram size={30}/>
        <FaTwitterSquare size={30}/>
        <FaGithubSquare size={30}/>
        <FaDribbbleSquare size={30}/>
      </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt:6'>
        <div>
            <h6 className='font-medium text-gray-400'> Bootcamps</h6>
            <ul>
                <li className='py-2 text-sm'>Java Developer</li>
                <li className='py-2 text-sm'>Full Stack Junior</li>
                <li className='py-2 text-sm'>Data Analytics</li>
            </ul>
        </div>
      </div>
      <div className='lg:col-span-3 flex justify-between'>
        <div>
            <h6 className='font-medium text-gray-400'>Explore</h6>
            <ul>
                <li className='py-2 text-sm'>Design</li>
                <li className='py-2 text-sm'>Prototype</li>
                <li className='py-2 text-sm'>Development features</li>
                <li className='py-2 text-sm'>Collaboration features</li>
                <li className='py-2 text-sm'>Design Process</li>
            </ul>
        </div>
      </div>
      <div className='lg:col-span-3 flex justify-between'>
        <div>
            <h6 className='font-medium text-gray-400'> Recursos</h6>
            <ul>
                <li className='py-2 text-sm'>Bloq</li>
                <li className='py-2 text-sm'>F&Q</li>
                <li className='py-2 text-sm'>Soporte</li>
                <li className='py-2 text-sm'>Quienes Somos</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
