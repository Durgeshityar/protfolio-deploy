import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Durgesh Chandrakar',
  description: 'Full stack developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <TopBar />
        <div className="fixed">
          <SideBar />
        </div>
        {children}
      </body>
    </html>
  )
}
