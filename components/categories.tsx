'use client'

import { ChevronRight } from 'lucide-react'

const categories = [
  { icon: '🛋️', name: 'Meubles', count: '245' },
  { icon: '🛏️', name: 'Lits', count: '89' },
  { icon: '🪑', name: 'Chaises', count: '156' },
  { icon: '📺', name: 'Électronique', count: '302' },
  { icon: '🧊', name: 'Électroménagers', count: '127' },
  { icon: '🍽️', name: 'Cuisines', count: '98' },
]

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-background">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-sm font-bold text-primary tracking-widest uppercase">Catégories</span>
          <h2 className="font-rajdhani text-5xl font-bold text-foreground mt-2">Explorez par catégorie</h2>
        </div>
        <a href="#" className="text-primary hover:text-secondary font-bold text-sm flex items-center gap-2 transition-colors">
          Voir tout
          <ChevronRight size={18} />
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="card p-6 text-center cursor-pointer transition-all hover:border-primary hover:shadow-md hover:translate-y-[-4px] flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center text-3xl group-hover:bg-primary/10 transition-colors">
              {cat.icon}
            </div>
            <h3 className="text-base font-bold text-foreground">{cat.name}</h3>
            <p className="text-sm text-muted-foreground">{cat.count} produits</p>
          </div>
        ))}
      </div>
    </section>
  )
}
