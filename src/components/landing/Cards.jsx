import React from 'react'
import Java from '../../assets/java.webp';
import Fullstack from '../../assets/fullstack.jpg';
import Dataanalistyc from '../../assets/datanalistyc.jpg'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-w-[1024px] mx-auto grid md:grid-cols-3 gap-8">
         <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  hover:scale-105 duration-300'>
                <img className='text-center w-80 max-auto mt-[-3rem] bg-white rounded-xl' src={Java} />
                <h2 className='text-2xl font-bold text-center py-8'>Java Developer</h2>
                <p className='text-center text-xl font-medium'>Aprende Java desde cero hasta un nivel avanzado, incluyendo el desarrollo de aplicaciones backend robustas.</p>
         <div className='text-center font-normal'>
            <p className='py-2 border-b mx-8 mt-8'>Java </p>
            <p className='py-2 border-b mx-8'>Spring Boot </p>
            <p className='py-2 border-b mx-8'>MySql</p>  
         </div>
         <button className='bg-[#04dbde] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Mas Info</button>
         </div>

         <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  hover:scale-105 duration-300'>
                <img className='text-center w-80 max-auto mt-[-3rem] bg-white rounded-xl' src={Fullstack} />
                <h2 className='text-2xl font-bold text-center py-8'>Fullstack Jr</h2>
                <p className='text-center text-xl font-medium'>Curso orientado a aprender desarrollo Fullstack con ReactJS, Laravel y MySQL</p>
         <div className='text-center font-normal'>
            <p className='py-2 border-b mx-8 mt-8'>ReactJS</p>
            <p className='py-2 border-b mx-8'>Laravel </p>
            <p className='py-2 border-b mx-8'>MySql</p>  
         </div>
         <button className='bg-[#04dbde] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Mas Info</button>
         </div>
       
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  hover:scale-105 duration-300 '>
                <img className='content-centerw-80 max-auto mt-[-3rem] bg-white rounded-xl' src={Dataanalistyc} />
                <h2 className='text-2xl font-bold text-center py-8'>Data Analytics</h2>
                <p className='text-center text-xl font-medium'>Curso de análisis de datos con enfoque en Python, PowerBI y R para generar insights y visualización de datos.</p>
         <div className='text-center font-normal'>
            <p className='py-2 border-b mx-8 mt-8'>Python</p>
            <p className='py-2 border-b mx-8'>PowerBI</p>
            <p className='py-2 border-b mx-8'>R</p>  
         </div>
         <button className='bg-[#04dbde] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Mas Info</button>
         </div>
        </div>
        
      
    </div>
  )
}

export default Cards

