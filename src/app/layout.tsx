import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import './globals.css'
import NavBar from '@/components/common/NavBar'
import FooterSection from '@/components/sections/FooterSection'


export const metadata: Metadata = {
  title: 'REP',
  description: 'Network & Security Platform.',
}

const inter = Inter({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={inter.className} >
        <div className="flex flex-col-reverse md:flex-col">
          <NavBar />
        </div>
        {children}
        <div>
        <FooterSection />
        </div>
      </body>
    </html>
  )
}
