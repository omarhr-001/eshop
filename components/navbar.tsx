'use client'

import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0">
            <Image 
              src="/logo.jpg"
              alt="HME Logo"
              width={60}
              height={60}
              className="w-14 h-14 object-contain"
              priority
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-rajdhani font-bold text-lg text-foreground">HME</span>
              <span className="text-xs text-muted-foreground tracking-wide">Hamroun Meuble & Electro</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <Link href="/" className="text-foreground hover:text-primary font-medium text-sm transition-colors">Accueil</Link>
            <Link href="/categories" className="text-foreground hover:text-primary font-medium text-sm transition-colors">Produits</Link>
            <Link href="/categories" className="text-foreground hover:text-primary font-medium text-sm transition-colors">Catégories</Link>
            <a href="#" className="text-foreground hover:text-primary font-medium text-sm transition-colors">À propos</a>
            <a href="#" className="text-foreground hover:text-primary font-medium text-sm transition-colors">Contact</a>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="hidden md:flex items-center gap-2 bg-muted border border-border rounded px-4 py-2.5 hover:border-primary transition-colors">
              <Search size={16} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent border-0 outline-0 text-foreground text-sm w-48 placeholder:text-muted-foreground font-nunito"
              />
            </div>

            {/* Cart button */}
            <button className="relative p-2.5 hover:bg-muted rounded transition-colors">
              <ShoppingCart size={20} className="text-foreground" />
              <span className="absolute top-1 right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">2</span>
            </button>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 hover:bg-muted rounded transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border space-y-1">
            <Link href="/" className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary rounded transition-colors font-medium text-sm">Accueil</Link>
            <Link href="/categories" className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary rounded transition-colors font-medium text-sm">Produits</Link>
            <Link href="/categories" className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary rounded transition-colors font-medium text-sm">Catégories</Link>
            <a href="#" className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary rounded transition-colors font-medium text-sm">À propos</a>
            <a href="#" className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary rounded transition-colors font-medium text-sm">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}

