'use client'

import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen bg-stone-50 flex items-center relative overflow-hidden pt-20 lg:pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700/8 via-transparent to-stone-50 opacity-60"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-600/8 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
              <span className="text-green-700 text-sm font-bold tracking-wide uppercase">Nouveauté</span>
            </div>

            {/* Heading */}
            <h1 className="font-rajdhani text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Meubles &<br />
              <span className="text-green-700">Électroménagers</span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Découvrez notre sélection de meubles de qualité et d&apos;électroménagers dernière génération pour transformer votre maison en un espace de confort et de modernité.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap mb-12">
              <button className="bg-green-700 text-white border-0 rounded-lg px-8 py-3.5 font-nunito text-base font-bold flex items-center gap-2 cursor-pointer transition-all hover:bg-green-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-700/35">
                Découvrir
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent text-slate-900 border border-stone-300 rounded-lg px-8 py-3.5 font-nunito text-base font-semibold cursor-pointer transition-all hover:border-green-700 hover:text-green-700">
                En savoir plus
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div className="flex flex-col">
                <span className="font-rajdhani text-4xl font-bold text-slate-900 leading-none">
                  2500<span className="text-green-700">+</span>
                </span>
                <span className="text-sm text-slate-600 uppercase tracking-wider mt-1">Produits</span>
              </div>
              <div className="flex flex-col">
                <span className="font-rajdhani text-4xl font-bold text-slate-900 leading-none">
                  50K<span className="text-green-700">+</span>
                </span>
                <span className="text-sm text-slate-600 uppercase tracking-wider mt-1">Clients</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center items-center h-96 lg:h-full min-h-96">
            {/* Main Card */}
            <div className="bg-white border border-stone-300 rounded-3xl p-8 lg:p-10 w-72 lg:w-80 relative animate-float shadow-lg">
              <div className="absolute -top-4 right-6 bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                -35%
              </div>
              
              <div className="text-6xl lg:text-7xl text-center mb-6">🛋️</div>
              <h3 className="font-rajdhani text-2xl lg:text-3xl font-bold text-slate-900 text-center mb-2">Canapé Luxe</h3>
              <p className="text-sm text-slate-600 text-center mb-6">Premium Edition</p>
              
              <div className="text-center space-y-3">
                <div>
                  <span className="font-rajdhani text-3xl lg:text-4xl font-bold text-green-700">4,299 DZD</span>
                  <span className="text-sm text-slate-600 line-through ml-3">6,599 DZD</span>
                </div>
                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition-all duration-300">
                  Ajouter au Panier
                </button>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="hidden lg:flex absolute top-1/4 -left-24 bg-white border border-stone-300 rounded-2xl p-4 flex items-center gap-4 animate-float animation-delay-1s shadow-lg">
              <span className="text-4xl">📺</span>
              <div>
                <p className="text-base text-slate-900 font-bold">TV 55"</p>
                <p className="text-sm text-green-700 font-bold">1,899 DZD</p>
              </div>
            </div>

            <div className="hidden lg:flex absolute bottom-1/4 -right-24 bg-white border border-stone-300 rounded-2xl p-4 flex items-center gap-4 animate-float animation-delay-2s shadow-lg">
              <span className="text-4xl">🧊</span>
              <div>
                <p className="text-base text-slate-900 font-bold">Réfrigérateur</p>
                <p className="text-sm text-green-700 font-bold">2,599 DZD</p>
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
        .animation-delay-1s {
          animation-delay: 1s;
        }
        .animation-delay-2s {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}
