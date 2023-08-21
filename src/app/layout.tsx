import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ELEBLOG',
  description: 'Personal Blog',
}

export default function RootLayout({
  children,
}: {
  // This is the page
  children: React.ReactNode
}) {
  const header = 
  <header>
    <div className='text-center border-b border-slate-200  p-8 my-6'>   
      <div>
        <Image className='hover:animate-spin inline' src="/favicon2.png" width={35} height={35}></Image>
        <Link className="text-2xl font-bold" href="/">
          <h3 className='hover:text-teal-500 hover:border-teal-500 hover:animate-pulse inline px-5 border-b border-slate-500'>ELEDAH</h3>
        </Link>
        <Image className='hover:animate-spin inline' src="/favicon.png" width={35} height={35}></Image>
      </div>
    </div>
  </header>

  const footer =
  <div className='hover:animate-pulse text-center border-t border-slate-200 mt-6 py-6'>
    <p><Image className='inline' src="/favicon.png" width={30} height={30}></Image></p>
  </div>

  return (
    // this is the header and the fooder
    <html lang="en" dir='rtl' className='bg-amber-50'>
      <body className={inter.className}>
        <div className='mx-auto md:max-w-2xl lg:max-w-3xl px-6'>
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
