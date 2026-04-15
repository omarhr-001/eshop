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
    <section className="bg-card py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-muted-foreground font-bold tracking-widest uppercase mb-12">
          Marques partenaires
        </p>
        <div className="flex items-center justify-center flex-wrap gap-6">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="bg-muted rounded-lg px-6 py-3 font-rajdhani text-base font-bold text-foreground transition-all cursor-pointer hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
