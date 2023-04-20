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
  let wormImg='https://firebasestorage.googleapis.com/v0/b/story-of-my-life-d0220.appspot.com/o/images%2FwormsEyeViewImge928683d-9362-46ed-a747-32cdaaeff6c1?alt=media&token=d7f4e5ab-06dd-4c26-9195-e3b0759c40eb'
  let pixelImg='https://firebasestorage.googleapis.com/v0/b/story-of-my-life-d0220.appspot.com/o/images%2FpixelPondImg9990b93c-40b3-44c2-91ad-3b8e4e5fc01d?alt=media&token=9944fbcf-3d20-4b8b-927e-07019f836902'
  let funkoImg='https://firebasestorage.googleapis.com/v0/b/story-of-my-life-d0220.appspot.com/o/images%2FfunkoPopImgeceedc6c-94e0-472f-9972-dd7f15c6acf2?alt=media&token=6c16149c-cb94-4327-b554-98ff28dd12c9'
  return (
    <div id='projects' className='w-full pt-4'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-4xl tracking-widest uppercase text-[#5651e5] font-caveat'>Projects</p>
            <h2 className='py-4'> What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'> 
        <Projectitem title='Pixel Pond' backgroundImg={pixelImg} projectUrl='/pixelPond' description='Photo storage and management website'/>
        <Projectitem title="Worm's Eye View" backgroundImg={wormImg} projectUrl='/wormsEyeView' description='Gardening companion app'/>
        <Projectitem title='FunkoPop Shop' backgroundImg={funkoImg} projectUrl='/funkoPop' description='E-commerce'  />
        {/* <Projectitem title='Grace`s Bookshelf' backgroundImg={bookshelfImg} projectUrl='/bookshelf' /> */}

            </div>
        </div>
    </div>
  )
}

export default Projects