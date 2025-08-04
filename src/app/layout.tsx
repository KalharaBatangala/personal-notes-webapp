

// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Notes App',
  description: 'Simple notes app built with Next.js',
  icons: {
    icon: '/next.svg',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-100 text-black dark:bg-zinc-900 dark:text-white min-h-screen`}>

        <ThemeProvider>
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
