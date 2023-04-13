import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get in touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/*left  */}
    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='lg:p-4 h-full '>
            <div>
                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://cdn.shopify.com/app-store/listing_images/c2d2c2ebfde890cd8d92147169fd6480/icon/COWYiMf0lu8CEAE=.png' alt='' />
            </div>
            <div>
                <h2 className='py-2'>Grace Gao </h2>
                <p>Fullstack developer</p>
                <p className='py-4'> I am available for freelance or full-time position. Contact me and let's talk!</p>
            </div>

        <div>
            <p className='uppercase pt-8'>Connect with me</p>
            <div className='flex items-center justify-between py-4'> 
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedin />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                </div>
            </div>
        </div>
        </div>
    </div>
{/* right */}


            </div>
        </div>
    
    </div>
  )
}

export default Contact