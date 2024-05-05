import React from 'react'
import { Tabs } from '@/app/components/ui/tabs'
import Image from 'next/image'
const client = (
  <Image src={'/medium/clientmu.png'} alt="" height={1000} width={1000} />
)
const dynamicRender = (
  <Image height={1000} width={1000} src={'/medium/dynamic.png'} alt="" />
)
const f2f = (
  <Image height={1000} width={1000} src={'/medium/followersystem.png'} alt="" />
)
const webhookImg = (
  <Image height={1000} width={1000} src={'/webhook.png'} alt="" />
)
const authentication = (
  <Image height={1000} width={1000} src={'/medium/Mauth.png'} alt="" />
)

const tabs = [
  { title: 'Follower system', value: ' Follower system', content: f2f },
  {
    title: 'Client mutation',
    value: 'clieent Mutation',
    content: client,
  },
  {
    title: 'Dynamic rendering',
    value: 'Dynamic rendering',
    content: dynamicRender,
  },

  { title: 'Authentication', value: 'Authentication', content: authentication },
]

const MediumCard = () => {
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default MediumCard
