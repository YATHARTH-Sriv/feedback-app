"use client"
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div id="socials" className=' bg-black h-full ' >
    <h1 className=" flex flex-row items-center justify-center mb-10 w-full text-4xl text-white p-4">Connect With Me</h1>
      <ul className=' flex items-center justify-center mb-10'>
        <li>
          <Link  href={"https://github.com/YATHARTH-Sriv"}>
            <img
            src={"https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"}
            alt={"github"}
            height={80}
            width={80}
            className=' hover:bg-white text-white font-bold py-2 px-4  transition duration-300 ease-in-out transform hover:scale-110 rounded-md'
            />
          </Link>
        </li>
        <li>
          <Link href={"https://www.linkedin.com/in/yatharth-srivastava-0b0382261/"}>
            <img
            src={"https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"}
            alt={"Linkedin"}
            height={60}
            width={60}
            className=' hover:bg-blue-600 text-white font-bold   transition duration-300 ease-in-out transform hover:scale-110  m-2 rounded-md'
            />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/yatharth_sriv">
            <img
            src={"https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"}
            alt={"twitter"}
            height={70}
            width={70}
            className=' hover:bg-white text-white font-bold py-2 px-4  transition duration-300 ease-in-out transform hover:scale-110 rounded-md'
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/yatharth_sriv/">
            <img
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"}
            alt={"instagram"}
            height={70}
            width={70}
            className='  hover:bg-pink-600 text-white font-bold py-2 px-4  transition duration-300 ease-in-out transform hover:scale-110 rounded-md'
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer