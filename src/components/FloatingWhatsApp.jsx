import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <aside className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip */}
      <div className="hidden sm:flex items-center mr-3 px-3.5 py-2 rounded-xl bg-[#0e1210] border border-[#a6861c]/40 text-xs font-semibold text-white shadow-2xl transition-all opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#d4a726] mr-2 animate-pulse"></span>
        Fale Conosco no WhatsApp!
      </div>
      
      {/* Pulsing Button */}
      <a 
        href="https://wa.me/5585981749877?text=Olá!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20os%20planos%20da%20Iron%20Jungle." 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp da Iron Jungle" 
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#d4a726] via-[#f5d565] to-[#a6861c] text-black flex items-center justify-center text-2xl sm:text-3xl shadow-gold-glow hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </aside>
  )
}
