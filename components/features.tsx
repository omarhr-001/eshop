'use client'

const features = [
  {
    icon: '🚚',
    title: 'Livraison Gratuite',
    desc: 'Livraison gratuite pour les commandes supérieures à 5000 DZD'
  },
  {
    icon: '💎',
    title: 'Produits Premium',
    desc: 'Sélection rigoureuse de produits de qualité supérieure'
  },
  {
    icon: '🛡️',
    title: 'Garantie 2 ans',
    desc: 'Garantie complète sur tous les meubles et électroménagers'
  },
  {
    icon: '💬',
    title: 'Support 24/7',
    desc: 'Assistance client disponible 24h/24, 7j/7'
  },
]

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 bg-stone-50">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-bold text-green-700 tracking-widest uppercase">Avantages</span>
        <h2 className="font-rajdhani text-5xl font-bold text-slate-900 mt-2">Pourquoi nous choisir</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white border border-stone-200 rounded-2xl p-8 transition-all hover:border-green-700 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              {feature.icon}
            </div>
            <h3 className="font-rajdhani text-lg font-bold text-slate-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
