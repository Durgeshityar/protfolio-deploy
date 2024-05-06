'use client'
import { useState, useEffect, useRef } from 'react'

const frameworkColors: { [key: string]: string } = {
  'Next.js': '#000000', // Black
  'Tailwind CSS': '#0070f3', // Blue
  TypeScript: '#2b74f5', // Blue
  Prisma: '#00b894', // Green
  Postgresql: '#336791', // Purple
  Firebase: '#ffc000', // Orange
  Clerk: '#f08080', // Pink
  MongoDb: '#00b894', // green
}
const framework = [
  'Next.js',
  'TypeScript',
  'Prisma',
  'Postgresql',
  'Firebase',
  'Clerk',
  'MongoDb',
  'Tailwind CSS',
]

export const ChangingText = () => {
  const [text, setText] = useState(framework[0])
  const [color, setColor] = useState(frameworkColors[text])
  const indexRef = useRef(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % framework.length
      const newText = framework[indexRef.current]
      setText(newText)
      setColor(frameworkColors[newText])
    }, 1000) // Change text and color every 1 second (adjust as needed)

    return () => clearInterval(intervalId)
  }, [])

  return <div style={{ color }}>{text}</div>
}
