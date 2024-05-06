import { ContainerScroll } from '@/app/components/ui/container-scroll-animation'
import React from 'react'
import Image from 'next/image'
import { ChangingText } from '@/app/components/ChangingText'
import Footer from '@/app/components/footer'

const page = () => {
  return (
    <div className="  lg:ml-80 mt-28 lg:mt-10 h-full  w-screen flex-flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              You know the <br />
              <span className="text-7xl font-bold mt-1 leading-none px-1">
                Business 🚶🏼‍♂️
              </span>
            </h1>
          </>
        }
      >
        <div className="mx-auto rounded-2xl object-cover h-full object-left-top">
          <Image
            src={'/banner6.webp'}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </div>
      </ContainerScroll>
      <div className="flex w-full text-center justify-center px-1">
        <h1 className="text-4xl font-semibold text-black dark:text-white">
          I know the <br />
          <span className="text-7xl font-bold mt-1 leading-none">
            Chemistry ⚛
          </span>
        </h1>
      </div>
      <div className="flex w-full text-center justify-center my-5 py-8 px-1">
        <h1 className="text-4xl font-semibold text-black dark:text-white flex items-center gap-2">
          Preferred Framework
          <span className="text-6xl font-bold mt-1 leading-none">
            <ChangingText />
          </span>
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default page
