'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Categories from '@/components/categories'
import Products from '@/components/products'
import PromoSection from '@/components/promo-section'
import Features from '@/components/features'
import Brands from '@/components/brands'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <PromoSection />
      <Features />
      <Brands />
      <Newsletter />
      <Footer />
    </div>
  )
}
