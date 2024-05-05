import { MacbookScroll } from '@/app/components/ui/macbook-scroll'
import React from 'react'

const page = () => {
  return (
    <div className=" ml-10  lg:ml-80 mt-28 lg:mt-10 overflow-hidden w-screen flex-flex-col ">
      <MacbookScroll
        showGradient={true}
        title={'You know the business 📈🚶🏼‍♂️'}
        src="/banner5.png"
      />
    </div>
  )
}

export default page
