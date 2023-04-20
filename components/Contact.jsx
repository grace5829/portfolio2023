import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import emailjs from 'emailjs-com'
const Contact = () => {
const [name, setName]=useState('')
const [phoneNumber, setPhoneNumber]=useState('')
const [email, setEmail]=useState('')
const [message, setMessage]=useState('')
const [subject, setSubject]=useState('')

const form = useRef();

    let sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_b1sxy6w', 'template_9y2s0he', form.current, 'gSRMOyPdpGhAGoo6q')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          setName('')
          setEmail('')
          setMessage('')
          setSubject('')
          setPhoneNumber('')
    }

  return (
    <div id='contact' className='w-full lg:h-screen pt-4'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        
            <p className='text-4xl tracking-widest uppercase text-[#5651e5] font-caveat '>Contact</p>
            <h2 className='py-4'>Get in touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/*left  */}
    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 bg-[#ecf0f3] relative'>
        <div className='lg:p-4 h-full '>
        
            <div>
                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://cdn.shopify.com/app-store/listing_images/c2d2c2ebfde890cd8d92147169fd6480/icon/COWYiMf0lu8CEAE=.png' alt='' />
            </div>
            <div>
                <h2 className='py-2'>Grace Gao </h2>
                <p>Fullstack developer</p>
                <p className='py-4'> I am actively seeking new opportunities and would welcome the chance to connect and explore potential collaborations. Contact me and let&apos;s talk!</p>
            </div>

        <div>
            <p className='uppercase pt-8'>Connect with me</p>
            <div className='flex items-center justify-evenly py-4'> 
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  hover:bg-[#bfe1fb] bg-[#ecf0f3] relative">
                 <Link href='https://www.linkedin.com/in/gracegao-fullstack/'>   <FaLinkedin /> </Link> 
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  hover:bg-[#bfe1fb] bg-[#ecf0f3] relative">
                   <Link href="https://github.com/grace5829">  <FaGithub /> </Link>
                </div>
                {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                </div> */}
            </div>
        </div>
        </div>
    </div>
{/* right */}
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-[#ecf0f3] relative'> 
            <div className='p-4'>
            <form ref={form} onSubmit={sendEmail}> 
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'> 
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='flex flex-col'> 
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                </div>
                <div  className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div  className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div  className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'> Send Message</button>
            </form> 
            </div>
            </div>

            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'> 
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#ecf0f3] relative" >
                <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                </div>
                </Link>
            </div>
        </div>
    
    </div>
  )
}

export default Contact