'use client'

import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-rajdhani font-bold text-lg sm:text-xl">HME</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-rajdhani font-bold text-base sm:text-lg text-foreground">HME</span>
              <span className="text-xs text-muted-foreground">Meubles & Électro</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">Accueil</a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">Produits</a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">Catégories</a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">À propos</a>
            <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">Contact</a>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search bar */}
            <div className="hidden md:flex items-center gap-2 bg-grey-100 border border-border rounded-full px-4 py-2 hover:border-primary transition-colors">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent border-0 outline-0 text-foreground text-sm w-40 placeholder:text-muted-foreground font-nunito"
              />
            </div>

            {/* Cart button */}
            <button className="relative p-2 hover:bg-grey-100 rounded-lg transition-colors">
              <ShoppingCart size={20} className="text-foreground" />
              <span className="absolute top-1 right-1 w-5 h-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">2</span>
            </button>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-grey-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border space-y-1">
            <a href="#" className="block px-4 py-3 text-foreground hover:bg-grey-100 hover:text-primary rounded-lg transition-colors font-medium">Accueil</a>
            <a href="#" className="block px-4 py-3 text-foreground hover:bg-grey-100 hover:text-primary rounded-lg transition-colors font-medium">Produits</a>
            <a href="#" className="block px-4 py-3 text-foreground hover:bg-grey-100 hover:text-primary rounded-lg transition-colors font-medium">Catégories</a>
            <a href="#" className="block px-4 py-3 text-foreground hover:bg-grey-100 hover:text-primary rounded-lg transition-colors font-medium">À propos</a>
            <a href="#" className="block px-4 py-3 text-foreground hover:bg-grey-100 hover:text-primary rounded-lg transition-colors font-medium">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
