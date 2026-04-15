'use client'

import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen bg-background flex items-center relative overflow-hidden pt-20">
      {/* Subtle background element */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Subtitle */}
            <p className="text-muted-foreground text-sm font-rajdhani uppercase tracking-widest mb-6">
              Collection Premium
            </p>

            {/* Main Heading */}
            <h1 className="font-rajdhani text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
              Meubles &<br />
              <span className="text-primary">Électroménagers</span>
              <br />
              <span className="text-muted-foreground font-normal text-lg lg:text-2xl">de qualité</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-12">
              Découvrez notre sélection curatée de meubles et d&apos;électroménagers haut de gamme pour transformer votre espace de vie.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-6 items-center flex-wrap">
              <button className="btn-primary flex items-center gap-3">
                Découvrir la collection
                <ChevronRight size={20} />
              </button>
              <a href="#" className="text-primary font-semibold hover:text-secondary transition-colors flex items-center gap-2">
                Voir le catalogue
                <ChevronRight size={18} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-16 mt-20 pt-12 border-t border-border">
              <div>
                <p className="font-rajdhani text-4xl font-bold text-foreground mb-2">2500+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Produits</p>
              </div>
              <div>
                <p className="font-rajdhani text-4xl font-bold text-foreground mb-2">50K+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Clients</p>
              </div>
              <div>
                <p className="font-rajdhani text-4xl font-bold text-foreground mb-2">2 ans</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Garantie</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex items-center justify-center h-full">
            {/* Featured Product */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl"></div>
              <div className="card p-12 relative backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-7xl mb-8">🛋️</div>
                  <h3 className="font-rajdhani text-3xl font-bold text-foreground mb-2">Canapé Élégant</h3>
                  <p className="text-muted-foreground text-sm mb-6">Design contemporain</p>
                  
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <span className="font-rajdhani text-4xl font-bold text-primary">4 299 DTN</span>
                    <span className="text-muted-foreground line-through text-lg">6 599 DTN</span>
                  </div>
                  
                  <button className="btn-primary w-full justify-center">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-12 -left-20 card p-5 shadow-lg hover:shadow-xl transition-shadow">
              <p className="font-rajdhani font-bold text-foreground mb-1">Premium</p>
              <p className="text-xs text-muted-foreground">Collection 2024</p>
            </div>

            <div className="absolute bottom-20 -right-16 card p-5 shadow-lg hover:shadow-xl transition-shadow">
              <p className="font-rajdhani font-bold text-primary mb-1">-35%</p>
              <p className="text-xs text-muted-foreground">Soldes spéciales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
