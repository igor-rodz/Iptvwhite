import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { MoviesCarousel } from '@/components/MoviesCarousel'
import { DevicesSection } from '@/components/DevicesSection'
import { PricingPlans } from '@/components/PricingPlans'
import { TechnicalFeatures } from '@/components/TechnicalFeatures'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { SecurityShield } from '@/components/SecurityShield'
import { Toaster } from 'sonner'

export function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      <SecurityShield />
      <Navbar />
      <HeroSection />
      <MoviesCarousel />
      <DevicesSection />
      <PricingPlans />
      <TechnicalFeatures />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
