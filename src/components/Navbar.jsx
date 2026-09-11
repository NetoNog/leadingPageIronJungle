import React, { useState, useEffect } from 'react'
import { Phone, MessageCircle, Menu, X, ChevronRight } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Planos', href: '#planos' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050706]/95 backdrop-blur-md border-b border-[#26241a] shadow-xl py-2.5' 
          : 'bg-[#050706]/90 backdrop-blur-md border-b border-[#26241a] py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo Oficial Real */}
          <a href="#" className="flex items-center gap-2.5 group focus:outline-none flex-shrink-0">
            <img 
              src="/assets/logo-nome-horizontal.png" 
              alt="Iron Jungle Academia" 
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Links de Navegação do Site Oficial */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-xs xl:text-sm font-semibold tracking-wide text-slate-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#d4a726] transition-colors py-1 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botões de Ação */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a 
              href="https://api.whatsapp.com/send/?phone=5585981749877&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp Iron Jungle"
              className="hidden xl:flex text-xs text-slate-300 hover:text-[#d4a726] items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4a726]" />
              <span>(85) 98174-9877</span>
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=5585981749877"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 xl:px-3.5 py-2 rounded-xl bg-[#0e1210] border border-[#a6861c]/40 hover:border-[#d4a726] text-slate-200 hover:text-[#d4a726] text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#d4a726]" />
              <span>WhatsApp</span>
            </a>

            <a 
              href="#planos" 
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4a726] to-[#a6861c] hover:from-[#f5d565] hover:to-[#d4a726] text-black font-black text-xs tracking-wide shadow-gold hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Ver Planos</span>
            </a>
          </div>

          {/* Menu Mobile */}
          <button 
            type="button" 
            aria-label="Abrir Menu" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-[#0e1210] border border-[#26241a] flex items-center justify-center text-slate-200 hover:text-[#d4a726] focus:outline-none transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050706]/98 backdrop-blur-xl border-b border-[#26241a] px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-3 text-sm font-semibold">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-[#d4a726] py-1.5 flex items-center justify-between border-b border-[#26241a]/60"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            
            <div className="pt-4 flex flex-col gap-2.5">
              <a 
                href="#planos"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black font-black text-center text-xs tracking-wide shadow-gold flex items-center justify-center gap-2"
              >
                Ver Nossos Planos
              </a>

              <a 
                href="https://api.whatsapp.com/send/?phone=5585981749877" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#0e1210] border border-[#a6861c]/40 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#d4a726]" />
                Falar no WhatsApp
              </a>

              <p className="text-center text-[11px] text-slate-400 mt-1">Rua João Gentil, 250 • Benfica, Fortaleza</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

