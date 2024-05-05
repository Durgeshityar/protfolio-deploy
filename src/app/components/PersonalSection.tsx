'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const PersonalSection = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="h-full">
        <button
          onClick={() => {
            router.push('/')
          }}
          className="font-bold bg-neutral-100 px-4 py-2.5 text-3xl m-7 font-serif rounded-md"
        >
          दुर्गेश
        </button>
      </div>
      <div className="flex flex-col h-full ml-7 gap-3">
        <Link href={'/about'} className="font-sans">
          About
        </Link>
      </div>
    </div>
  )
}

export default PersonalSection
