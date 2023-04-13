import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import progress from '../public/assets/projects/progress.jpeg'
import Projectitem from './Projectitem'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'> What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'> 
        <Projectitem title='Project 1' backgroundImg={progress} projectUrl='/project1' />
        <Projectitem title='Project 2' backgroundImg={progress} projectUrl='/project2' />
        <Projectitem title='Project 3' backgroundImg={progress} projectUrl='/project3' />
        <Projectitem title='Project 4' backgroundImg={progress} projectUrl='/project4' />

            </div>
        </div>
    </div>
  )
}

export default Projects