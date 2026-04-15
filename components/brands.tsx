'use client'

const brands = [
  'Samsung',
  'LG Electronics',
  'Sony',
  'Whirlpool',
  'Bosch',
  'Ikea',
  'Roche Bobois',
  'Natuzzi'
]

export default function Brands() {
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-slate-600 font-bold tracking-widest uppercase mb-12">
          Marques partenaires
        </p>
        <div className="flex items-center justify-center flex-wrap gap-6">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="bg-stone-100 rounded-xl px-6 py-3 font-rajdhani text-base font-bold text-slate-700 transition-all cursor-pointer hover:bg-green-100 hover:text-green-700 border border-stone-200 hover:border-green-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
