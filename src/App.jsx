import { useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './components/HeroSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import WhyUsSection from './components/WhyUsSection.jsx'
import FeaturedPropertiesSection from './components/FeaturedPropertiesSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import { whatsappLink } from './data/siteData'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('.scroll-reveal').forEach((element) => {
      observer.observe(element)
    })

    const onScroll = () => {
      const header = document.querySelector('header')
      if (window.scrollY > 40) {
        header?.classList.add('header-scrolled')
      } else {
        header?.classList.remove('header-scrolled')
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white  to-orange-500 text-slate-900">
      <Header />

      <HeroSection />

      <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:py-16">
        <ServicesSection />
        <WhyUsSection />
        <FeaturedPropertiesSection />
        <ContactSection />
      </main>

      <Footer />

      <a href={whatsappLink} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-xl transition hover:bg-green-400 sm:hidden">
        <span className="h-4 w-4">📞</span> WhatsApp
      </a>
    </div>
  )
}

export default App
