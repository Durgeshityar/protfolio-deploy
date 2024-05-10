import React from 'react'
import { Tabs } from '@/app/components/ui/tabs'
import Image from 'next/image'
const landing = (
  <Image src={'/chess/landing.png'} alt="" height={1000} width={1000} />
)

const tabs = [
  { title: ' lannding page', value: ' landing page', content: landing },
]

const ChessCard = () => {
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default ChessCard
