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
            Pixel Pond is a photo storage and management website designed. It
            allows users to store unlimited photos for free and access them from
            any device with internet access. The website also features a folder
            system with the ability to upload multiple images, as well as the
            ability to download single images or multiple selected/all images in
            a zipped folder. With the ability to manage and store all of your
            photos in one place, this website makes it easy for users to keep
            their memories safe and organized.
          </p>

          <p className="pt-3">
            Pixel Pond was my first solo project! My biggest challenge was
            figuring out the best way to download multiple images. I spent time
            researching on google and experimented with different solutions. I
            knew the fastest solution would be to download a zip file with all
            the images but I couldn't find documentation for the exact code. I
            started by writing code to download images one at a time and with
            the save location as computer's downloads folder. Then I figured out
            how to create a new folder within my downloads folder for all the
            images. Lastly, I figured out how to convert the folder to a zip
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
