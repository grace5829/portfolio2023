import About from '@/components/About'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
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
  </Head>
  <Navbar/>
  <Main/>
  <About/>
  <Skills />
</div>
  )
}
