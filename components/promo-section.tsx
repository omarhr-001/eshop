'use client'

import { useState, useEffect } from 'react'

export default function PromoSection() {
  const [time, setTime] = useState({ days: 2, hours: 14, minutes: 32, seconds: 45 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
          if (minutes < 0) {
            minutes = 59
            hours--
            if (hours < 0) {
              hours = 23
              days--
            }
          }
        }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-secondary relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/10 opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-w-md">
          <div className="inline-block bg-primary/20 border border-primary px-4 py-2 rounded-full mb-5">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Offre limitée</span>
          </div>

          <h2 className="font-rajdhani text-5xl font-bold text-white leading-tight mb-4">
            Soldes<br />
            <span className="text-accent">Exceptionnels</span>
          </h2>

          <p className="text-white/70 text-base leading-relaxed mb-8">
            Profitez de réductions jusqu&apos;à -50% sur une sélection de produits. Offre valide pendant le compte à rebours.
          </p>

          {/* Timer */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {[
              { value: time.days, label: 'Jours' },
              { value: time.hours, label: 'Heures' },
              { value: time.minutes, label: 'Minutes' },
              { value: time.seconds, label: 'Secondes' },
            ].map((timer, i) => (
              <div key={i} className="bg-primary/20 border border-primary/30 rounded-lg p-3 text-center min-w-16">
                <p className="font-rajdhani text-2xl font-bold text-white leading-none">
                  {String(timer.value).padStart(2, '0')}
                </p>
                <p className="text-xs text-primary/80 tracking-widest uppercase mt-1">
                  {timer.label[0]}
                </p>
              </div>
            ))}
          </div>

          <button className="btn-primary">
            Acheter maintenant
          </button>
        </div>

        {/* Right Products */}
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          {[
            { emoji: '🛋️', name: 'Canapé Premium', price: '2,999 DZD', oldPrice: '4,799 DZD' },
            { emoji: '📺', name: 'TV OLED 77"', price: '9,999 DZD', oldPrice: '14,999 DZD' },
          ].map((prod, i) => (
            <div
              key={i}
              className="bg-white/10 border border-primary/25 rounded-lg px-6 py-5 flex items-center gap-5 hover:bg-white/15 transition-colors cursor-pointer"
            >
              <span className="text-5xl flex-shrink-0">{prod.emoji}</span>
              <div>
                <p className="text-white font-bold text-base">{prod.name}</p>
                <div className="flex gap-2 mt-1">
                  <span className="text-accent font-bold text-sm">{prod.price}</span>
                  <span className="text-white/40 line-through text-xs">{prod.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
