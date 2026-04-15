'use client'

import { Search, ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg flex items-center justify-between px-6 lg:px-12 h-16 lg:h-20 border-b border-stone-200 shadow-sm">
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 lg:gap-4 flex-shrink-0">
        <div className="w-12 h-12 lg:w-14 lg:h-14 relative">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-0cLQt0ohEo6IhCAW6jgPUu31ldClYN.jpg"
            alt="HME Logo"
            width={56}
            height={56}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="font-rajdhani text-lg lg:text-xl font-bold text-slate-900 tracking-wider">HME</span>
          <span className="text-xs lg:text-sm text-green-700 font-bold tracking-wide">Meuble & Electro</span>
        </div>
      </a>

      {/* Navigation Links */}
      <div className="hidden lg:flex gap-8 list-none items-center flex-1 justify-center mx-8">
        <a href="#" className="text-slate-600 text-sm font-bold tracking-wide hover:text-green-700 transition-colors duration-300">
          Accueil
        </a>
        <a href="#" className="text-slate-600 text-sm font-bold tracking-wide hover:text-green-700 transition-colors duration-300">
          Produits
        </a>
        <a href="#" className="text-slate-600 text-sm font-bold tracking-wide hover:text-green-700 transition-colors duration-300">
          Catégories
        </a>
        <a href="#" className="text-slate-600 text-sm font-bold tracking-wide hover:text-green-700 transition-colors duration-300">
          À Propos
        </a>
        <a href="#" className="text-slate-600 text-sm font-bold tracking-wide hover:text-green-700 transition-colors duration-300">
          Contact
        </a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 lg:gap-5">
        <div className="hidden md:flex items-center gap-2 bg-stone-100 border border-stone-300 rounded-full px-4 py-2">
          <Search className="w-4 h-4 text-slate-600" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-transparent border-0 outline-0 text-slate-900 text-sm w-32 lg:w-48 placeholder:text-slate-600 font-nunito"
          />
        </div>
        <button className="bg-green-700 hover:bg-green-800 text-white border-0 rounded-full p-2 lg:px-5 lg:py-2 font-bold flex items-center gap-2 cursor-pointer transition-all hover:shadow-lg hover:shadow-green-700/30">
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden lg:inline bg-white text-green-700 rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center">2</span>
        </button>
        <button className="lg:hidden text-slate-900 p-2" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  )
}
