import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import BackgroundBalls from "./BackgroundBalls";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <BackgroundBalls />
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-lg tracking-widest text-gray-600 font-caveat">
            Let&apos;s build something together.
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Grace </span>
          </h1>
          <h1 className="py-2 text-gray-700"> A Fullstack Web Developer</h1>
          {/* <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front end developer... 
          </p> */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/gracegao-fullstack/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#bfe1fb] ease-in duration-300 bg-[#ecf0f3] relative">
                <FaLinkedin />
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
  );
};

export default Main;
