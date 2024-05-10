import ChessCard from '@/app/components/projectCard/ChessCard'
import MediumCard from '@/app/components/projectCard/MediumCard'

import React from 'react'
const page = () => {
  return (
    <div className="mt-28 ml-3 mr-5  lg:mt-10 h-full lg:ml-96 flex flex-col justify-between w-screen overflow-hidden">
      <div className="flex flex-col">
        <p className="text-5xl font-semibold pb-5">Chess application ♟️</p>
        <p className="text-2xl font-semibold text-slate-400 pb-5">
          online chess playing application integrated with websockets and
          pub-subs for real time interaction between browsers
        </p>
        <div className="flex flex-col gap-3 text-sm font-sans pb-4">
          <p className="text-justify static">
            Application is a recreation of the popular online chess platform,
            Chess.com. Leveraging Vue.js for frontend development and websockets
            for real-time communication, we've ensured seamless gameplay
            experiences. Additionally, I've implemented pub-subs for efficient
            event handling and employed a stateful server to manage game states
            effectively. Clone offers all the essential features of Chess.com,
            providing users with an immersive and interactive chess-playing
            experience."
          </p>
          <p>
            Github repository
            <a
              href="https://github.com/Durgeshityar/chess"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-3 text-slate-600"
            >
              https://github.com/Durgeshityar/chess
            </a>
          </p>
        </div>
        <hr className="p-3" />
        <div className="w-full h-screen">
          <ChessCard />
        </div>
      </div>
    </div>
  )
}

export default page
