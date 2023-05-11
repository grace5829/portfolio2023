import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const [shadow,setShadow]=useState(false)
    const [navBg,setNavBg]=useState('#ecf0f3')
    const [linkColor,setLinkColor]=useState('#1f2937')
    const router=useRouter()

useEffect(() => {
  if(
    router.asPath === '/project1' ||
    router.asPath === '/project2' ||
    router.asPath === '/project3' ||
    router.asPath === '/project4'
  ){
    setNavBg('transparent')
    setLinkColor('#ecf0f3')
  } else {
    setNavBg('#ecf0f3')
    setLinkColor('#1f2937')
  }
}, [router])


    const handleNav=()=>{
        setNav(!nav)
    }

      useEffect(() => {
        const handleShadow =() =>{
          if (window.scrollY >= 90){
            setShadow(true)
          } else {
            setShadow(false)
          }
        }
        window.addEventListener('scroll', handleShadow)
      }, [])
      

  return (
    <div 
    style={{backgroundColor:`${navBg}`}}
    className={shadow? 'fixed w-full h-20 shadow-xl z-[100]':' fixed w-full h-20 z-[100]'  }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <div className="w-20">
        <Link href='/'> 
        <img src='https://firebasestorage.googleapis.com/v0/b/story-of-my-life-d0220.appspot.com/o/images%2Flogo7acb4ff3-0888-4d99-bd0f-611b407c811e?alt=media&token=e95c66ef-994b-4f8e-80e4-87e635724b1e' alt='' />
        </Link>
      </div>
        <div>
        {/* when you click to a project; it should go to a individual page for more detail about the app then link to the app on that page  */}
          {/* if window is greater than md width, it will take on prop flex, else smaller than md then is hidden */}
          <ul 
          style={{color:`${linkColor}`}}
          className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:font-bold hover:text-[#2d90dc]"> Home</li>{" "}
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#2d90dc] hover:font-bold"> About</li>{" "}
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#2d90dc] hover:font-bold">
                {" "}
                Skills
              </li>{" "}
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#2d90dc] hover:font-bold">
                {" "}
                Projects
              </li>{" "}
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#2d90dc] hover:font-bold">
                {" "}
                Contact
              </li>{" "}
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav?"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={nav?"fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500":
        "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
          <div>
            <div className="flex w-full items-center justify-between">
            <Link href='/'>

            <div className="w-20">
        <Link href='/'> 
        <img src='https://firebasestorage.googleapis.com/v0/b/story-of-my-life-d0220.appspot.com/o/images%2Flogo7acb4ff3-0888-4d99-bd0f-611b407c811e?alt=media&token=e95c66ef-994b-4f8e-80e4-87e635724b1e' alt='' />
        </Link>
      </div>
            </Link>
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"> 
                <p className="w-[85%] md:w-[90%] py-4">Let&apos;s build something</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
                <Link href='/'>
                    <li onClick={()=>setNav(false)} className="py-4 text-sm hover:text-[#2d90dc] hover:font-bold">Home</li>
                </Link>
                <Link href='/#about'>
                    <li onClick={()=>setNav(false)} className="py-4 text-sm hover:text-[#2d90dc] hover:font-bold">About</li>
                </Link>
                <Link href='/#skills'>
                    <li onClick={()=>setNav(false)} className="py-4 text-sm hover:text-[#2d90dc] hover:font-bold">Skills</li>
                </Link>
                <Link href='/#projects'>
                    <li onClick={()=>setNav(false)} className="py-4 text-sm hover:text-[#2d90dc] hover:font-bold">Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li onClick={()=>setNav(false)} className="py-4 text-sm hover:text-[#2d90dc] hover:font-bold">Contact</li>
                </Link>
            </ul>
            <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">Let&apos;s connect</p>
                <div className="flex itesm-center justify-between my-4 w-full sm:w-[80%]">
                <Link href="https://www.linkedin.com/in/gracegao-fullstack/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#bfe1fb] ease-in duration-300 bg-[#ecf0f3] relative">
                <FaLinkedin/>
              </div>
            </Link>
            <Link href="https://github.com/grace5829">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#bfe1fb] ease-in duration-300 bg-[#ecf0f3] relative">
                <FaGithub />
              </div>
            </Link>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#bfe1fb] ease-in duration-300 bg-[#ecf0f3] relative">
                <AiOutlineMail />
              </div>
            </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
