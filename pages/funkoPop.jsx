import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const FunkoPop = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80  ">
          <img
            className="relative z-[-1] w-[100%]"
            src="https://firebasestorage.googleapis.com/v0/b/story-of-my-life-d0220.appspot.com/o/images%2FfunkoPopTopImg0b93d48d-15d6-4f1f-9093-77697a678d00?alt=media&token=9f21dab9-8b1d-433f-9a9c-7db0d40187d2"
            alt=""
          />
        </div>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white  z-10 p-2 ">
          <h1 className="py-2">FunkoPop Shop</h1>
        </div>
      </div>
      <div className="bg-[#ecf0f3]">
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 bg-[#ecf0f3]">
          <div className="col-span-4">
            <p>
              This was my first group project! We created an e-commerce site for
              Funko Pop products, where you can simulate a shopping experience
              as a guest or a logged-in user. In addition, the site allows admin
              users to create, update, and delete products.
            </p>

            <h3 className="py-2">Contributions: </h3>
            <li>
              Set up Express routes to create, update, read, delete for user
              profile, cart, and FunkoPops{" "}
            </li>
            <li>
              Created react components for all products view, single product
              view, cart, home page, and user profile
            </li>
            <p className="pt-2">
              Created by: Jenny Chen, John Drayton, Andrea Arnold, Grace Gao
            </p>
            {/* <button className='px-8 py-2 mt-4 mr-8'>        
        <Link href='https://story-of-my-life-d0220.web.app/'>
          Demo </Link></button> */}
            <button className="px-8 py-2 mt-4">
              {" "}
              <Link href="https://github.com/funko-pop-teamb/FunkoPopShop">
                Code
              </Link>
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
                  <RiRadioButtonFill className="pr-1" /> Express
                </p>
                <p className="text-gray-600 py-2 flex items-center ">
                  <RiRadioButtonFill className="pr-1" /> Redux
                </p>
                <p className="text-gray-600 py-2 flex items-center ">
                  <RiRadioButtonFill className="pr-1" /> PostgreSQL
                </p>
                <p className="text-gray-600 py-2 flex items-center ">
                  <RiRadioButtonFill className="pr-1" /> Node
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer"> Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FunkoPop;
