'use client'

import { Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-secondary to-secondary/80 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-12 h-12 text-accent mx-auto mb-5" />
        
        <h2 className="font-rajdhani text-5xl font-bold text-white mb-4">
          Restez Informé
        </h2>

        <p className="text-white/70 text-base leading-relaxed mb-8">
          Inscrivez-vous à notre newsletter pour recevoir nos dernières offres, promotions exclusives et nouvelles collections.
        </p>

        <div className="flex gap-3 flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder:text-white/40 outline-0 focus:border-accent transition-colors font-nunito"
          />
          <button className="btn-primary whitespace-nowrap">
            S&apos;inscrire
          </button>
        </div>

        <p className="text-white/40 text-sm mt-5">
          Nous respectons votre vie privée. Désinscription facile à tout moment.
        </p>
      </div>
    </section>
  )
}
