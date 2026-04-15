'use client'

import { Heart, Plus, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    icon: '🛋️',
    brand: 'Furniture',
    name: 'Canapé Moderne 3 places',
    desc: 'Confortable et élégant',
    rating: 5,
    price: 3999,
    oldPrice: 5999,
    badge: 'Promo',
    badgeColor: 'red'
  },
  {
    icon: '📺',
    brand: 'Electronics',
    name: 'Smart TV 65"',
    desc: 'Ultra HD 4K',
    rating: 5,
    price: 12999,
    oldPrice: 16999,
    badge: 'Hot',
    badgeColor: 'dark'
  },
  {
    icon: '🧊',
    brand: 'Appliances',
    name: 'Réfrigérateur Inox',
    desc: 'Multi portes',
    rating: 4,
    price: 8499,
    oldPrice: 11999,
    badge: 'Nouveau',
    badgeColor: 'dark'
  },
  {
    icon: '🛏️',
    brand: 'Furniture',
    name: 'Lit King Size Premium',
    desc: 'Matelas inclus',
    rating: 5,
    price: 7999,
    oldPrice: 11999,
    badge: 'Stock Limité',
    badgeColor: 'red'
  },
  {
    icon: '🍽️',
    brand: 'Appliances',
    name: 'Lave-vaisselle',
    desc: 'Silencieux 42dB',
    rating: 4,
    price: 3499,
    oldPrice: 5299,
    badge: 'Promo',
    badgeColor: 'red'
  },
  {
    icon: '🪑',
    brand: 'Furniture',
    name: 'Set de Chaises 6',
    desc: 'Design scandinave',
    rating: 5,
    price: 4999,
    oldPrice: 7299,
    badge: 'Nouveau',
    badgeColor: 'dark'
  },
  {
    icon: '🛋️',
    brand: 'Furniture',
    name: 'Table Basse Verre',
    desc: 'Pieds en acier',
    rating: 4,
    price: 1899,
    oldPrice: 2899,
    badge: null,
    badgeColor: ''
  },
  {
    icon: '💡',
    brand: 'Electronics',
    name: 'Lampadaire LED',
    desc: 'Variation d\'intensité',
    rating: 5,
    price: 899,
    oldPrice: 1299,
    badge: 'Promo',
    badgeColor: 'red'
  },
]

export default function Products() {
  const [favorites, setFavorites] = useState<Record<number, boolean>>({})

  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-green-700 text-sm font-bold uppercase tracking-widest block mb-2">Meilleures offres</span>
            <h2 className="font-rajdhani text-5xl font-bold text-slate-900">Produits Populaires</h2>
          </div>
          <a href="#" className="text-green-700 hover:text-green-800 font-bold text-sm flex items-center gap-2 transition-colors">
            Voir tous
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-300 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              {/* Product Header */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">{product.icon}</span>
                <button
                  onClick={() => setFavorites(prev => ({ ...prev, [i]: !prev[i] }))}
                  className="bg-stone-100 hover:bg-green-700 hover:scale-110 border border-stone-300 rounded-full p-2.5 transition-all"
                >
                  <Heart className={`w-5 h-5 ${favorites[i] ? 'fill-current text-green-700' : 'text-slate-600'}`} />
                </button>
              </div>

              {/* Badge */}
              {product.badge && (
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                  product.badgeColor === 'red' ? 'bg-red-100 text-red-600' : 'bg-stone-200 text-slate-900'
                }`}>
                  {product.badge}
                </div>
              )}

              {/* Product Info */}
              <p className="text-sm text-slate-600 mb-1">{product.brand}</p>
              <h3 className="font-rajdhani font-bold text-slate-900 text-base mb-1">{product.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{product.desc}</p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(product.rating)].map((_, j) => (
                  <span key={j} className="text-green-700 text-base">★</span>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-rajdhani text-green-700 text-xl font-bold">{product.price.toLocaleString()} DZD</span>
                <span className="text-slate-600 text-sm line-through">{product.oldPrice.toLocaleString()} DZD</span>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg py-2.5 flex items-center justify-center gap-2 font-bold text-sm transition-all opacity-0 group-hover:opacity-100">
                <Plus className="w-5 h-5" />
                Ajouter
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
