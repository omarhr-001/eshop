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
  title: 'HME – Meubles & Électroménagers de Qualité',
  description: 'Découvrez notre sélection premium de meubles et électroménagers pour transformer votre maison',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${rajdhani.variable} ${nunito.variable} bg-background`}>
      <body className="bg-background text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
