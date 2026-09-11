import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-[#1c1606] via-[#2c220a] to-[#1c1606] border-b border-[#a6861c]/40 text-slate-100 text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3 h-3 text-black" />
          Benfica • Fortaleza
        </span>
        <span>A melhor estrutura fitness do Benfica, a 100m da Praça da Gentilândia.</span>
        <a 
          href="#planos" 
          className="underline hover:text-[#f5d565] font-bold ml-1 inline-flex items-center gap-1 transition-colors text-[#d4a726]"
        >
          Matricule-se Online <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}

