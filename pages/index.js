import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
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
</div>
  )
}
