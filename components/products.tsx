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
    badgeColor: 'primary'
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
    badgeColor: 'secondary'
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
    badgeColor: 'secondary'
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
    badgeColor: 'primary'
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
    badgeColor: 'primary'
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
    badgeColor: 'secondary'
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
    badgeColor: 'primary'
  },
]

export default function Products() {
  const [favorites, setFavorites] = useState<Record<number, boolean>>({})

  return (
    <section className="bg-card py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest block mb-2">Meilleures offres</span>
            <h2 className="font-rajdhani text-5xl font-bold text-foreground">Produits Populaires</h2>
          </div>
          <a href="#" className="text-primary hover:text-secondary font-bold text-sm flex items-center gap-2 transition-colors">
            Voir tous
            <ChevronRight size={18} />
          </a>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="card p-5 hover:shadow-md hover:border-primary transition-all duration-300 group cursor-pointer">
              {/* Product Header */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">{product.icon}</span>
                <button
                  onClick={() => setFavorites(prev => ({ ...prev, [i]: !prev[i] }))}
                  className="bg-muted hover:bg-primary hover:scale-110 rounded-full p-2.5 transition-all"
                >
                  <Heart className={`w-5 h-5 ${favorites[i] ? 'fill-current text-primary' : 'text-muted-foreground'}`} />
                </button>
              </div>

              {/* Badge */}
              {product.badge && (
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                  product.badgeColor === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  {product.badge}
                </div>
              )}

              {/* Product Info */}
              <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
              <h3 className="font-rajdhani font-bold text-foreground text-base mb-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(product.rating)].map((_, j) => (
                  <span key={j} className="text-primary text-base">★</span>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-rajdhani text-primary text-xl font-bold">{product.price.toLocaleString()} DTN</span>
                <span className="text-muted-foreground text-sm line-through">{product.oldPrice.toLocaleString()} DTN</span>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-primary hover:bg-secondary text-primary-foreground rounded-lg py-2.5 flex items-center justify-center gap-2 font-bold text-sm transition-all opacity-0 group-hover:opacity-100">
                <Plus size={18} />
                Ajouter
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
