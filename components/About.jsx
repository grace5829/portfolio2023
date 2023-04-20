import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">

     
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-4xl tracking-widest  text-[#5651e5] font-caveat">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I&apos;m a full stack developer with experience primarily in the
            <span className="text-[#5651e5] font-bold">
              {" "}
              JavaScript PERN stack
            </span>
            . As a graduate of Fullstack Academy Program, I&apos;ve built web
            applications by contributing to
            <span className="text-[#5651e5] font-bold">
              {" "}
              front and back end development{" "}
            </span>
            with integration through
            <span className="text-[#5651e5] font-bold">
              {" "}
              relational & non-relational databases
            </span>
            . I thrive on exchanging ideas and collaborating with my peers when
            working in pairs, and enjoy tackling complex problems and exploring
            new technologies when working independently. I am eager to apply my
            experience and expertise to drive meaningful innovation in the
            software industry. I am actively
            <span className="text-[#5651e5] font-bold">
              {" "}
              seeking new opportunities{" "}
            </span>
            and would welcome the chance to connect and explore potential
            collaborations.
          </p>
          <p className="py-2 text-gray-600">
            I have always been driven to pursue a career that offers ongoing
            opportunities for learning and growth. I am drawn to collaborative
            work environments where I can make a meaningful impact on the
            development of the company while enhancing my own abilities. My
            prior experience with client services and payments makes me a

            <span className="text-[#5651e5] font-bold"> creative problem solver</span>,
            <span className="text-[#5651e5] font-bold"> meticulous </span>,
            and
             <span className="text-[#5651e5] font-bold blob4b"> detail oriented
            </span>
            . My passion lies in mission-based, tech-for-good roles that allow
            me to use my skills to make a positive impact on society.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out my projects</Link>
          </p>
        </div>
        <div className="relative w-full h-auto m-auto shadow-xl shawdow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-[#ecf0f3]">
        {/* <Image
            className="rounded-xl"
            src="/../public/assets/me2.jpeg"
            alt="/"
          width="285"
          height="280"          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
