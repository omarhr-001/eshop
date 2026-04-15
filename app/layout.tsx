import type { Metadata } from 'next'
import { Rajdhani, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani'
})

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-nunito'
})

export const metadata: Metadata = {
  title: 'HME – Hamroun Meuble & Electromenager',
  description: 'Meubles et électroménagers de qualité pour votre maison',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${rajdhani.variable} ${nunito.variable} bg-stone-50`}>
      <body className="bg-stone-50 text-slate-900 antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
