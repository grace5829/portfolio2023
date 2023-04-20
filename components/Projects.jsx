import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import progress from '../public/assets/projects/progress.jpeg'
import pixelPondImg from '../public/assets/projects/pixelPondImg.png'
// import FunkoPopTopImg from '../public/assets/projects/FunkoPopTopImg.png'
import wormsEyeView from '../public/assets/projects/wormsEyeViewImg.png'
import bookshelfImg from '../public/assets/projects/bookshelfImg.png'
import Projectitem from './Projectitem'
import BackgroundBalls from './BackgroundBalls'

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-4'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-4xl tracking-widest uppercase text-[#5651e5] font-caveat'>Projects</p>
            <h2 className='py-4'> What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'> 
        <Projectitem title='Pixel Pond' backgroundImg={pixelPondImg} projectUrl='/pixelPond' description='Photo storage and management website'/>
        <Projectitem title="Worm's Eye View" backgroundImg={wormsEyeView} projectUrl='/wormsEyeView' description='Gardening companion app'/>
        {/* <Projectitem title='FunkoPop Shop' backgroundImg={FunkoPopTopImg} projectUrl='/funkoPop' description='E-commerce' /> */}
        {/* <Projectitem title='Grace`s Bookshelf' backgroundImg={bookshelfImg} projectUrl='/bookshelf' /> */}

            </div>
        </div>
    </div>
  )
}

export default Projects