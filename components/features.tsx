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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-background">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-bold text-primary tracking-widest uppercase">Avantages</span>
        <h2 className="font-rajdhani text-5xl font-bold text-foreground mt-2">Pourquoi nous choisir</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="card p-8 transition-all hover:border-primary hover:shadow-md hover:translate-y-[-4px]"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-3xl mb-6">
              {feature.icon}
            </div>
            <h3 className="font-rajdhani text-lg font-bold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
