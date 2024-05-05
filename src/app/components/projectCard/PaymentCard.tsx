import React from 'react'
import { Tabs } from '@/app/components/ui/tabs'
import Image from 'next/image'
const bankImg = (
  <Image src={'/payment/banktransfer.png'} alt="" height={1000} width={1000} />
)
const dashboardImg = (
  <Image height={1000} width={1000} src={'/payment/Dashboard.png'} alt="" />
)
const p2pImg = (
  <Image height={1000} width={1000} src={'/payment/p2p.png'} alt="" />
)
const webhookImg = (
  <Image height={1000} width={1000} src={'/payment/webhook.png'} alt="" />
)
const authentication = (
  <Image height={1000} width={1000} src={'/payment/signin.png'} alt="" />
)

const tabs = [
  { title: 'Bank Transfer', value: 'Bank Transfer', content: bankImg },
  { title: 'P2P transfer', value: 'P2P transfer', content: p2pImg },
  { title: 'Web hook ', value: ' Web hook', content: webhookImg },
  { title: 'Authentication', value: 'Authentication', content: authentication },
  { title: 'Dashboard', value: 'Dashboard', content: dashboardImg },
]

const PaymentCard = () => {
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  )
}

export default PaymentCard
