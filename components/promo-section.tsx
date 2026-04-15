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
    <section className="bg-dark relative overflow-hidden py-16 px-12">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green/20 via-transparent to-green/10 opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex items-center justify-between">
        {/* Left Content */}
        <div className="max-w-md">
          <div className="inline-block bg-green/20 border border-green px-3.5 py-1.25 rounded-full mb-5">
            <span className="text-green text-2.75 font-bold letter-spacing-1 uppercase">Offre limitée</span>
          </div>

          <h2 className="font-rajdhani text-5xl font-bold text-white leading-tight mb-4">
            Soldes<br />
            <span className="text-green">Exceptionnels</span>
          </h2>

          <p className="text-white/60 text-base leading-relaxed mb-8">
            Profitez de réductions jusqu&apos;à -50% sur une sélection de produits. Offre valide pendant le compte à rebours.
          </p>

          {/* Timer */}
          <div className="flex gap-4 mb-8">
            {[
              { value: time.days, label: 'Jours' },
              { value: time.hours, label: 'Heures' },
              { value: time.minutes, label: 'Minutes' },
              { value: time.seconds, label: 'Secondes' },
            ].map((timer, i) => (
              <div key={i} className="bg-green/12 border border-green/30 rounded-2.5 p-3 text-center min-w-16">
                <p className="font-rajdhani text-3xl font-bold text-white leading-none">
                  {String(timer.value).padStart(2, '0')}
                </p>
                <p className="text-2.5 text-green letter-spacing-1 uppercase mt-0.5">
                  {timer.label[0]}
                </p>
              </div>
            ))}
          </div>

          <button className="bg-green hover:bg-green-dark text-white border-0 rounded-xl px-8 py-3.5 font-nunito text-base font-bold cursor-pointer transition-all">
            Acheter maintenant
          </button>
        </div>

        {/* Right Products */}
        <div className="flex flex-col gap-4">
          {[
            { emoji: '🛋️', name: 'Canapé Premium', price: '2,999 DZD', oldPrice: '4,799 DZD' },
            { emoji: '📺', name: 'TV OLED 77"', price: '9,999 DZD', oldPrice: '14,999 DZD' },
          ].map((prod, i) => (
            <div
              key={i}
              className="bg-white/5 border border-green/25 rounded-4 px-6 py-5 flex items-center gap-5 min-w-72 hover:-translate-x-1.5 transition-transform cursor-pointer"
            >
              <span className="text-5xl flex-shrink-0">{prod.emoji}</span>
              <div>
                <p className="text-white font-bold text-base">{prod.name}</p>
                <div className="flex gap-2 mt-1">
                  <span className="text-green font-bold text-sm">{prod.price}</span>
                  <span className="text-white/40 line-through text-2.75">{prod.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
