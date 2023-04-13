import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-centerh-full'>
    <p className='text-xl tracking-wdied uppercase text-[#5151e5]'> Skills</p>
    <h2 className='py-4'>What I can do</h2>
    <div className='grid md:grid-cols-4 lg:grid-cols-6 gap-8'>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/html.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>HTML</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/css.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>CSS</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/firebase.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>Firebase</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/github1.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>Github</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/javascript.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>JavaScript</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/react.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>React</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/node.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>Node</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/tailwind.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>Tailwind</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/nextjs.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>NextJS</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/redux.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>Redux</h3>
            </div>
        </div>
        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/postgresqls.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>PostgreSQL</h3>
            </div>
        </div>
        </div>
        <div className='p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/assets/skills/express.png' alt='/' width='64' height='64'/>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h3>Express</h3>
            </div>
        </div>
        </div>


    </div>
    </div>
    
    </div>
  )
}

export default Skills