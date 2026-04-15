'use client'

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-rajdhani font-bold text-lg text-white">HME</span>
              </div>
              <div>
                <p className="font-rajdhani text-base font-bold">HME</p>
                <p className="text-xs text-accent font-bold uppercase">Meubles & Électro</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Votre destination pour les meubles et électroménagers de qualité. Transformez votre maison avec nos produits sélectionnés.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-rajdhani font-bold text-base mb-5">Accès Rapide</h3>
            <ul className="space-y-3">
              {['Accueil', 'Produits', 'Catégories', 'Promotions'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-white/70 hover:text-accent text-sm transition-colors">
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
                  <a href="#" className="text-white/70 hover:text-accent text-sm transition-colors">
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
                  <a href="#" className="text-white/70 hover:text-accent text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">
              © 2024 Hamroun Meuble & Électroménagers. Tous droits réservés.
            </p>
            <div className="flex gap-5">
              {[
                { icon: Facebook, link: '#' },
                { icon: Twitter, link: '#' },
                { icon: Instagram, link: '#' },
                { icon: Linkedin, link: '#' }
              ].map((social, i) => (
                <a key={i} href={social.link} className="text-white/50 hover:text-accent transition-colors">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
