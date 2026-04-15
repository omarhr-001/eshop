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
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 bg-stone-50">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-sm font-bold text-green-700 tracking-widest uppercase">Catégories</span>
          <h2 className="font-rajdhani text-5xl font-bold text-slate-900 mt-2">Explorez par catégorie</h2>
        </div>
        <a href="#" className="text-green-700 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
          Voir tout
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white border border-stone-200 rounded-2xl px-4 py-6 text-center cursor-pointer transition-all hover:border-green-700 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center gap-3 group"
          >
            <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-green-100 transition-colors">
              {cat.icon}
            </div>
            <h3 className="text-base font-bold text-slate-900">{cat.name}</h3>
            <p className="text-sm text-slate-600">{cat.count} produits</p>
          </div>
        ))}
      </div>
    </section>
  )
}
