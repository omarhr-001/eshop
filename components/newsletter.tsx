'use client'

import { Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-dark to-dark2 py-18 px-12">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-12 h-12 text-green mx-auto mb-5" />
        
        <h2 className="font-rajdhani text-5xl font-bold text-white mb-4">
          Restez Informé
        </h2>

        <p className="text-white/60 text-base leading-relaxed mb-8">
          Inscrivez-vous à notre newsletter pour recevoir nos dernières offres, promotions exclusives et nouvelles collections.
        </p>

        <div className="flex gap-3 flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-5 py-3.5 text-white placeholder:text-white/40 outline-0 focus:border-green transition-colors font-nunito"
          />
          <button className="bg-green hover:bg-green-dark text-white border-0 rounded-lg px-8 py-3.5 font-nunito font-bold cursor-pointer transition-all">
            S&apos;inscrire
          </button>
        </div>

        <p className="text-white/40 text-2.75 mt-5">
          Nous respectons votre vie privée. Désinscription facile à tout moment.
        </p>
      </div>
    </section>
  )
}
