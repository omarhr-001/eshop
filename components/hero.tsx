'use client'

import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen bg-background flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background opacity-60"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-sm font-bold tracking-wide uppercase">Nouveauté 2024</span>
            </div>

            {/* Heading */}
            <h1 className="font-rajdhani text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Meubles &<br />
              <span className="text-primary">Électroménagers</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl mb-8">
              Découvrez notre sélection de meubles de qualité et d&apos;électroménagers dernière génération pour transformer votre maison en un espace de confort et de modernité.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap mb-12">
              <button className="btn-primary flex items-center gap-2">
                Découvrir
                <ChevronRight size={20} />
              </button>
              <button className="px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-border transition-colors">
                En savoir plus
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="font-rajdhani text-4xl font-bold text-foreground leading-none">
                  2500<span className="text-primary">+</span>
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide mt-2">Produits</span>
              </div>
              <div className="flex flex-col">
                <span className="font-rajdhani text-4xl font-bold text-foreground leading-none">
                  50K<span className="text-primary">+</span>
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide mt-2">Clients</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center items-center h-96 lg:h-full min-h-96">
            {/* Main Card */}
            <div className="card p-8 lg:p-10 w-72 lg:w-80 relative shadow-md hover:shadow-lg transition-shadow animate-float">
              <div className="absolute -top-4 right-6 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                -35%
              </div>
              
              <div className="text-6xl lg:text-7xl text-center mb-6">🛋️</div>
              <h3 className="font-rajdhani text-2xl lg:text-3xl font-bold text-foreground text-center mb-2">Canapé Luxe</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">Premium Edition</p>
              
              <div className="text-center space-y-3">
                <div>
                  <span className="font-rajdhani text-3xl lg:text-4xl font-bold text-primary">4,299 DZD</span>
                  <span className="text-sm text-muted-foreground line-through ml-3">6,599 DZD</span>
                </div>
                <button className="w-full btn-primary">
                  Ajouter au Panier
                </button>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="hidden lg:flex absolute top-1/4 -left-24 card p-4 items-center gap-4 animate-float shadow-md hover:shadow-lg transition-shadow" style={{animationDelay: '1s'}}>
              <span className="text-4xl">📺</span>
              <div>
                <p className="text-base text-foreground font-bold">TV 55"</p>
                <p className="text-sm text-primary font-bold">1,899 DZD</p>
              </div>
            </div>

            <div className="hidden lg:flex absolute bottom-1/4 -right-24 card p-4 items-center gap-4 animate-float shadow-md hover:shadow-lg transition-shadow" style={{animationDelay: '2s'}}>
              <span className="text-4xl">🧊</span>
              <div>
                <p className="text-base text-foreground font-bold">Réfrigérateur</p>
                <p className="text-sm text-primary font-bold">2,599 DZD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
