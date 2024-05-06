import PaymentCard from '@/app/components/projectCard/PaymentCard'
import React from 'react'
const page = () => {
  return (
    <div className="mt-28 ml-5 mr-5  lg:mt-10 lg:ml-96 h-full  flex flex-col justify-between w-full overflow-hidden">
      <div className="flex flex-col">
        <p className="text-5xl font-semibold pb-5">Payment Application</p>
        <p className="text-2xl font-semibold text-slate-400 pb-5">
          Fullstack App end to end in turborepo with webhook handler
        </p>
        <div className="flex flex-col gap-3 text-sm font-sans pb-4">
          <p className="text-justify static">
            This project showcases a full-fledged payment application designed
            for both merchants and users, similar to Paytm. Users can enjoy a
            suite of features including sending and receiving money with ease,
            topping up their accounts directly from their bank (through a
            simulated webhook server integration), and even facilitating on-ramp
            transactions for seamless integration with various payment gateways.
            Built with a powerful tech stack that prioritizes security and user
            experience (Turborepo, Next.js, Prisma, PostgreSQL, TypeScript,
            NextAuth, Tailwind CSS), this application offers a robust and
            user-friendly platform for managing finances.
          </p>
          <p>
            Github repository
            <a
              href="https://github.com/Durgeshityar/paymentapp-turborepo-/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-3 text-slate-600"
            >
              https://github.com/Durgeshityar/paymentapp-turborepo-/tree/main
            </a>
          </p>
        </div>
        <hr className="p-3" />
        <div className="w-full h-screen">
          <PaymentCard />
        </div>
      </div>
    </div>
  )
}

export default page
