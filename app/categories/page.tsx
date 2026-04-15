'use client'

import { useState, useMemo } from 'react'
import { ChevronDown, X } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const allProducts = [
  { id: 1, icon: '🛋️', name: 'Canapé Moderne 3 places', category: 'Meubles', brand: 'Furniture', price: 3999, oldPrice: 5999 },
  { id: 2, icon: '🛏️', name: 'Lit King Size Premium', category: 'Lits', brand: 'Furniture', price: 7999, oldPrice: 11999 },
  { id: 3, icon: '🪑', name: 'Chaise de Bureau Ergonomique', category: 'Chaises', brand: 'Office Pro', price: 1299, oldPrice: 1899 },
  { id: 4, icon: '📺', name: 'Smart TV 65"', category: 'Électronique', brand: 'Samsung', price: 12999, oldPrice: 16999 },
  { id: 5, icon: '🧊', name: 'Réfrigérateur Inox Multi-portes', category: 'Électroménagers', brand: 'LG', price: 8499, oldPrice: 11999 },
  { id: 6, icon: '🍽️', name: 'Cuisine Complète Moderne', category: 'Cuisines', brand: 'Ikea', price: 4500, oldPrice: 6999 },
  { id: 7, icon: '🛋️', name: 'Table Basse Verre Design', category: 'Meubles', brand: 'Roche Bobois', price: 1899, oldPrice: 2899 },
  { id: 8, icon: '🪑', name: 'Set de Chaises 6 places', category: 'Chaises', brand: 'Natuzzi', price: 4999, oldPrice: 7299 },
  { id: 9, icon: '📺', name: 'Téléviseur OLED 77"', category: 'Électronique', brand: 'Sony', price: 24999, oldPrice: 34999 },
  { id: 10, icon: '🧊', name: 'Lave-vaisselle Silencieux', category: 'Électroménagers', brand: 'Bosch', price: 3499, oldPrice: 5299 },
  { id: 11, icon: '🛏️', name: 'Matelas Ergonomique 140x190', category: 'Lits', brand: 'Sealy', price: 2999, oldPrice: 4499 },
  { id: 12, icon: '🍽️', name: 'Table à Manger Bois Massif', category: 'Cuisines', brand: 'Furniture', price: 2499, oldPrice: 3899 },
]

const brands = ['Samsung', 'LG', 'Sony', 'Bosch', 'Furniture', 'Office Pro', 'Ikea', 'Roche Bobois', 'Natuzzi', 'Sealy']

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 })
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('popular')

  const filteredProducts = useMemo(() => {
    let products = allProducts

    // Filter by category
    if (selectedCategory) {
      products = products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Filter by price
    products = products.filter(p => p.price >= priceRange.min && p.price <= priceRange.max)

    // Filter by brand
    if (selectedBrands.length > 0) {
      products = products.filter(p => selectedBrands.includes(p.brand))
    }

    // Sort
    if (sortBy === 'priceLow') {
      products.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'priceHigh') {
      products.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'nameAZ') {
      products.sort((a, b) => a.name.localeCompare(b.name))
    }

    return products
  }, [selectedCategory, priceRange, selectedBrands, sortBy])

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="font-rajdhani text-5xl font-bold text-foreground mb-2">
              {selectedCategory ? `${selectedCategory}` : 'Toutes les catégories'}
            </h1>
            <p className="text-muted-foreground">{filteredProducts.length} produits trouvés</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <aside className="lg:col-span-1">
              <div className="space-y-8 sticky top-28">
                {/* Reset Filters */}
                {(selectedCategory || selectedBrands.length > 0 || priceRange.min > 0 || priceRange.max < 50000) && (
                  <button
                    onClick={() => {
                      setSelectedCategory(null)
                      setSelectedBrands([])
                      setPriceRange({ min: 0, max: 50000 })
                      setSortBy('popular')
                    }}
                    className="w-full px-4 py-2 border border-border text-foreground rounded hover:bg-muted transition-colors text-sm font-semibold"
                  >
                    Réinitialiser les filtres
                  </button>
                )}

                {/* Price Filter */}
                <div className="card p-6">
                  <h3 className="font-rajdhani font-bold text-foreground mb-6">Gamme de prix</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Min: {priceRange.min.toLocaleString()} DTN</label>
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        step="500"
                        value={priceRange.min}
                        onChange={(e) => {
                          const newMin = parseInt(e.target.value)
                          if (newMin <= priceRange.max) {
                            setPriceRange({ ...priceRange, min: newMin })
                          }
                        }}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Max: {priceRange.max.toLocaleString()} DTN</label>
                      <input
                        type="range"
                        min="0"
                        max="50000"
                        step="500"
                        value={priceRange.max}
                        onChange={(e) => {
                          const newMax = parseInt(e.target.value)
                          if (newMax >= priceRange.min) {
                            setPriceRange({ ...priceRange, max: newMax })
                          }
                        }}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Brands Filter */}
                <div className="card p-6">
                  <h3 className="font-rajdhani font-bold text-foreground mb-6">Marques</h3>
                  <div className="space-y-3">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="w-4 h-4 rounded border-border cursor-pointer"
                        />
                        <span className="text-sm text-foreground">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Sort Options */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-sm text-muted-foreground">
                  Affichage de {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="flex gap-2 items-center">
                  <label className="text-sm text-muted-foreground">Trier par:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-border rounded text-sm bg-card text-foreground outline-0 focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value="popular">Populaire</option>
                    <option value="priceLow">Prix croissant</option>
                    <option value="priceHigh">Prix décroissant</option>
                    <option value="nameAZ">Nom (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="card p-6 hover:shadow-md hover:border-primary transition-all duration-300 group cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-5xl">{product.icon}</span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                      <h3 className="font-rajdhani font-bold text-foreground text-base mb-3 line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-baseline gap-3 mb-6">
                        <span className="font-rajdhani text-primary text-2xl font-bold">
                          {product.price.toLocaleString()} DTN
                        </span>
                        <span className="text-muted-foreground text-sm line-through">
                          {product.oldPrice.toLocaleString()} DTN
                        </span>
                      </div>

                      <button className="btn-primary w-full text-center opacity-0 group-hover:opacity-100 transition-opacity">
                        Ajouter au panier
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">Aucun produit trouvé avec ces critères</p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null)
                      setSelectedBrands([])
                      setPriceRange({ min: 0, max: 50000 })
                    }}
                    className="text-primary hover:text-secondary font-semibold mt-4"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
