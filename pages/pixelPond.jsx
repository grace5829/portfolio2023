import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import pixelPondTopImg from "../public/assets/projects/pixelPondTopImg.png";
import Link from "next/link";
const PixelPond = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80  z-10" />
        <Image
          className="absolute  z-1"
          layout="fill"
          objectFit="cover"
          src={pixelPondTopImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white  z-10 p-2">
          <h1 className="py-2">Pixel Pond</h1>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            Pixel Pond is a photo storage and management website designed to
            help users store unlimited photos for free and access them from any
            device with internet access. The website features a user-friendly
            folder system that allows users to upload multiple images, as well
            as the ability to download single images or multiple selected/all
            images in a zipped folder. With the ability to manage and store all
            of your photos in one place, Pixel Pond makes it easy for users to
            keep their memories safe and organized.
          </p>

          <p className="pt-3">
            As my first solo project, Pixel Pond presented a significant
            challenge in figuring out the best way to download multiple images.
            After spending time researching and experimenting with
            different solutions, I ultimately discovered that the fastest
            solution was to download a zip file with all the images. However, I
            couldn&apos;t find documentation for the exact code to accomplish this
            task. I started by writing code to download images one at a time and
            saving them to the computer&apos;s downloads folder. Then, I figured out
            how to create a new folder within my downloads folder for all the
            images. Lastly, I learned how to convert the folder to a zip
            format.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <Link href="https://story-of-my-life-d0220.web.app/">Demo </Link>
          </button>
          <button className="px-8 py-2 mt-4">
            {" "}
            <Link href="https://github.com/grace5829/pixelPond">Code</Link>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Material UI
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> React-Toastify
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer"> Back</p>
        </Link>
      </div>
    </div>
  );
};

export default PixelPond;
