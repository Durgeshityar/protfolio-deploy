'use client'

import Link from 'next/link'

const TopBar = () => {
  return (
    <div className=" lg:hidden flex justify-between items-center fixed w-full bg-blend-overlay px-4">
      <div>
        <button
          onClick={() => {}}
          className="font-bold bg-neutral-100 px-4 py-2.5 text-3xl m-7 font-serif rounded-md"
        >
          दुर्गेश
        </button>
      </div>
      <div className="flex gap-4 text-lg ">
        <Link href={'/about'}>About</Link>
        <Link href={'/projects'}>Projects</Link>
        <a
          href="https://rb.gy/tjq4l0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer">CV</div>
        </a>
      </div>
    </div>
  )
}

export default TopBar
