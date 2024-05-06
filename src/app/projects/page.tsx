import React from 'react'
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid'
import Image from 'next/image'
import Footer from '../components/footer'

const Page = () => {
  return (
    <div className=" ml-10  lg:ml-80 mt-28 lg:mt-10 mr-10 overflow-hidden w-screen flex-flex-col ">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            link={item.link}
          />
        ))}
      </BentoGrid>
    </div>
  )
}
const Skeleton = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <div className="flex w-full justify-center overflow-hidden">{children}</div>
  </div>
)

const Img = () => {
  return (
    <div className=" rounded-md">
      <Image src={'/payment.png'} alt="logo" height={150} width={150} />
    </div>
  )
}

const MediumImg = () => {
  return (
    <div className=" rounded-md">
      <Image
        src={'/medium/mediumlogo.png'}
        alt="logo"
        height={150}
        width={150}
      />
    </div>
  )
}

const items = [
  {
    title: 'Payment Application',
    description:
      'wallet app that lets users onramp money via a fake bank account.',
    header: (
      <Skeleton>
        <Img />
      </Skeleton>
    ),
    className: 'md:col-span-2 bg-neutral-50',
    link: '/projects/paymentapp',
  },
  {
    title: 'Blogging Webapp',
    description: 'medium like blogging app in serverless fashion.',
    header: (
      <Skeleton>
        <MediumImg />
      </Skeleton>
    ),
    className: 'md:col-span-2 bg-neutral-50',
    link: '/projects/bloggingapp',
  },
]

export default Page
