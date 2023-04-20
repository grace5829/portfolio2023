import About from '@/components/About'
import BackgroundBalls from '@/components/BackgroundBalls'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
<div>
{
  //Head is useed to change the tab name in the browser
}
  <Head>
    <title>Grace | Fullstack Developer</title>
    {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico"/> */}
  </Head>
  <Main/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
</div>
  )
}
