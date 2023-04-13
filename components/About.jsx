import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest  text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'> First paragraph of myself</p>
                <p className='py-2 text-gray-600'> Second paragraph of myself</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out my projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shawdow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'> 
            <img className='rounded-xl ' src='https://ih1.redbubble.net/image.1588386565.4549/flat,750x,075,f-pad,750x1000,f8f8f8.jpg' alt='/'  />
            </div>
        </div>
    </div>
  )
}

export default About