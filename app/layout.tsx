import './globals.css'
import type { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { StateContext } from '@/hooks/use-state'
import ToastProvider from '@/lib/tosat-provider'



export const metadata: Metadata = {
  title: 'PHOTOLAND',
  description: 'PHOTOLAND',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body   
     >
     
     <StateContext> 
     <ToastProvider/>
           <Navbar/>
        {children}
        <Footer/>
        </StateContext>
     
        </body>
    </html>
  )
}
