'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const TopBar = () => {
  const router = useRouter()
  return (
    <div
      className=" lg:hidden flex justify-between items-center fixed w-full  
    px-4 bg-gradient-to-t from-transparent to-white"
    >
      <div>
        <button
          onClick={() => {
            router.push('/about')
          }}
          className="font-bold bg-neutral-100 px-4 py-2.5 text-3xl m-7 font-serif rounded-md"
        >
          दुर्गेश
        </button>
      </div>
      <div className="flex gap-4 text-lg ">
        <Link href={'/about'}>About</Link>
        <Link href={'/projects'}>Projects</Link>
        <Link href={'/arsenal/skill'}>Skills</Link>

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
