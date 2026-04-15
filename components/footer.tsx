'use client'

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-12 py-16">
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11.5 h-11.5 bg-dark2 rounded-full border-2.5 border-green flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0.75 left-1/2 -translate-x-1/2 w-0.75 h-3 bg-green rounded-0.5"></div>
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-3 border-t-0.75 border-green rounded-t-3"></div>
              </div>
              <div>
                <p className="font-rajdhani text-base font-bold tracking-widest">HME</p>
                <p className="text-2.5 text-green tracking-tighter font-bold uppercase">Meuble</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Votre destination pour les meubles et électroménagers de qualité. Transformez votre maison avec nos produits sélectionnés.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-rajdhani font-bold text-base mb-5">Accès Rapide</h3>
            <ul className="space-y-3">
              {['Accueil', 'Produits', 'Catégories', 'Promotions'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-green text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-rajdhani font-bold text-base mb-5">Support</h3>
            <ul className="space-y-3">
              {['Contact', 'FAQ', 'Retours', 'Livraison'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-green text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-rajdhani font-bold text-base mb-5">Légal</h3>
            <ul className="space-y-3">
              {['Conditions d\'utilisation', 'Politique de confidentialité', 'CGV', 'Mentions légales'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-green text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm">
              © 2024 Hamroun Meuble & Électroménagers. Tous droits réservés.
            </p>
            <div className="flex gap-5">
              {[
                { icon: Facebook, link: '#' },
                { icon: Twitter, link: '#' },
                { icon: Instagram, link: '#' },
                { icon: Linkedin, link: '#' }
              ].map((social, i) => (
                <a key={i} href={social.link} className="text-white/40 hover:text-green transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
