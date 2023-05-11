import Image from 'next/image'
import React from 'react'
import wormsEyeViewImg from '../public/assets/projects/wormsEyeViewImg.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
const wormsEyeView = () => {

  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80  z-10'/> 
        <Image className='absolute  z-1' layout='fill' objectFit='cover' src={wormsEyeViewImg} alt='/' />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white  z-10 p-2'> 
        <h1 className='py-2'>Worm&apos;s Eye View</h1>
      </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'> 
        <h2>Overview</h2>
        <p>Worm&apos;s Eye View is a gardening companion app to assist gardeners. User&apos;s can a list of plant suggestions based on 
        their location, time of year, and current weather.Additionally, 
         users can browse the entire database of 500 plants, save favorite plants,
         journal their gardening progress and plan their future garden with our garden plot visualizer tool.
         </p>
         <p>
        Worm&apos;s Eye View was my capstone project at Fullstack Academy. This project taught me the importance of planning and design. We started with a very clear goal, 
        stretch goal, and design. We invested time and resources into these areas which saved time in the long run since we had a good API for plants, images, and weather. 
        We also had a clear idea of the layout so it was easy for everyone to focus on a small part without constantly needing to check in. 
</p> 
        <h3 className='py-2'>Contributions: </h3>
        <li> Created connections to the Firebase database that enabled data retrieval and storage</li>
        <li> Developed user registration/authentication with account and profile settings using Firebase auth</li>
        <li> Designed and developed view all plants page and filter abilities</li>
        <li> Created and implemented CRUD operations for personal journal component </li>

<p className='pt-2'>
         Created by: An Emard, Kevin Lam, Kenny Johnson and Grace Gao
          </p>
        <button className='px-8 py-2 mt-4 mr-8'>        
        <Link href='https://wormseye-d1c52.web.app/'>
          Demo </Link></button>
        <button className='px-8 py-2 mt-4'> <Link href='https://github.com/team-mind-capstone/worms-eye-view'>Code</Link></button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'> 
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'> 
                <p className='text-gray-600 py-2 flex items-center '> 
                <RiRadioButtonFill className='pr-1'/> React 
                </p>
                <p className='text-gray-600 py-2 flex items-center '> 
                <RiRadioButtonFill className='pr-1'/> Firebase 
                </p>
                <p className='text-gray-600 py-2 flex items-center '> 
                <RiRadioButtonFill className='pr-1'/> Node 
                </p>
                <p className='text-gray-600 py-2 flex items-center '> 
                <RiRadioButtonFill className='pr-1'/> P5 
                </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
        <p className='underline cursor-pointer'> Back</p>
        </Link>
      </div>
    </div>
  )
}

export default wormsEyeView