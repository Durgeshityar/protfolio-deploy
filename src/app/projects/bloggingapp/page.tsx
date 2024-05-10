import MediumCard from '@/app/components/projectCard/MediumCard'
import PaymentCard from '@/app/components/projectCard/PaymentCard'
import React from 'react'
const page = () => {
  return (
    <div className="mt-28 ml-3 mr-5  lg:mt-10 h-full lg:ml-96 flex flex-col justify-between w-screen overflow-hidden">
      <div className="flex flex-col">
        <p className="text-5xl font-semibold pb-5">Blogging Application 🧑‍💻</p>
        <p className="text-2xl font-semibold text-slate-400 pb-5">
          Building a Scalable Social Platform with Cutting-Edge Technologies
        </p>
        <div className="flex flex-col gap-3 text-sm font-sans pb-4">
          <p className="text-justify static">
            This project delves into the construction of a social media platform
            akin to Medium. The frontend is built with React, ensuring a dynamic
            and user-friendly experience for navigating and interacting with
            content. Cloudflare Workers handle backend logic efficiently,
            allowing for a lightweight and scalable architecture. Data
            validation in the frontend is streamlined using Zod, offering type
            inference for frontend code. TypeScript as the programming language
            enforces strong typing for reliable code. Prisma, an
            Object-Relational Mapper, provides a smooth interface between the
            application and the PostgreSQL database, further enhanced by
            connection pooling for efficient database interaction. Finally, JWT
            (JSON Web Token) is employed for secure user authentication. This
            combination of cutting-edge technologies ensures a robust, scalable,
            and secure foundation for the social platform.
          </p>
          <p>
            Github repository
            <a
              href="https://github.com/Durgeshityar/bloggingapp"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-3 text-slate-600"
            >
              https://github.com/Durgeshityar/bloggingapp
            </a>
          </p>
        </div>
        <hr className="p-3" />
        <div className="w-full h-screen">
          <MediumCard />
        </div>
      </div>
    </div>
  )
}

export default page
