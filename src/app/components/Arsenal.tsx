'use client'
import Link from 'next/link'

const Arsenal = () => {
  return (
    <div className="p-8  flex flex-col gap-4">
      <p className="font-thin font-sans text-sm"> ARSENAL</p>
      <ul className="text-sm flex flex-col gap-3 ">
        <Link href={'/arsenal/skill'}>
          <li>Skills</li>
        </Link>
        <Link href={'/projects'}>
          <li>Projects</li>
        </Link>
        <a
          href="https://rb.gy/tjq4l0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer">CV</div>
        </a>
      </ul>
    </div>
  )
}

export default Arsenal
