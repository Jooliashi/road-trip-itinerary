import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'

import './globals.css'

const _dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
})
const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Arizona Road Trip | March 22-24',
  description:
    'A 3-day cultural road trip itinerary from Phoenix to the Grand Canyon through Sedona, Jerome & Flagstaff.',
}

export const viewport: Viewport = {
  themeColor: '#b05a2d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_dmSerif.variable} ${_inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
