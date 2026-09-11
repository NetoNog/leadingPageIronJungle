import React from 'react'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Structure from './components/Structure.jsx'
import Team from './components/Team.jsx'
import Results from './components/Results.jsx'
import Pricing from './components/Pricing.jsx'
import WellhubBadge from './components/WellhubBadge.jsx'
import BmiCalculator from './components/BmiCalculator.jsx'
import InstagramFeed from './components/InstagramFeed.jsx'
import Location from './components/Location.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050706] text-slate-100 antialiased selection:bg-[#d4a726] selection:text-black bg-grid-pattern">
      <AnnouncementBar />
      <Navbar />
      
      <main>
        {/* 1. Hero Section Oficial */}
        <Hero />
        
        {/* 2. Sobre Nós (100m da Gentilândia + Vídeo) */}
        <About />
        
        {/* 3. Estrutura (Biofilic Design, Mural Zé Victor & Fotos) */}
        <Structure />
        
        {/* 4. Nossa Equipe (Alívio de Dores, 3ª Idade & Fotos) */}
        <Team />
        
        {/* 5. Seus Resultados (App Exclusivo, Ranking com Brindes & Fotos) */}
        <Results />
        
        {/* 6. Nossos Planos (Tecnofit Checkout Oficial) */}
        <Pricing />
        
        {/* 7. Convênio Corporativo Wellhub / Gympass */}
        <WellhubBadge />
        
        {/* 8. Calculadora Interativa com Turno */}
        <BmiCalculator />
        
        {/* 9. Instagram Oficial @ironjungleacademia */}
        <InstagramFeed />
        
        {/* 10. Contato & Mapa Oficial */}
        <Location />
        
        {/* 11. FAQ & Dúvidas Frequentes */}
        <Faq />
      </main>

      {/* Rodapé e Botão Flutuante */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

