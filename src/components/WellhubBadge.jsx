import React from 'react'
import { ShieldCheck, MessageCircle } from 'lucide-react'

export default function WellhubBadge() {
  return (
    <section id="wellhub" className="py-12 bg-[#050706] border-b border-[#26241a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0e1210] border border-[#a6861c]/40 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-black border border-[#a6861c]/50 flex items-center justify-center flex-shrink-0 shadow-gold">
              <span className="text-2xl font-black text-[#d4a726] font-heading">W</span>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#a6861c]/15 text-[#f5d565] border border-[#a6861c]/30 text-xs font-bold uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a726]" />
                Academia Credenciada Oficial
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                Você tem Wellhub (antigo Gympass) ou TotalPass?
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                Treine na <strong>Iron Jungle Academia</strong> utilizando seu plano corporativo. Check-in diário liberado com acesso a toda a estrutura de ferro pesado e esteiras.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <a 
              href="https://wa.me/5585981749877?text=Olá!%20Gostaria%20de%20saber%20quais%20planos%20do%20Wellhub%20(Gympass)%20são%20aceitos%20na%20Iron%20Jungle." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a726] to-[#a6861c] hover:from-[#f5d565] hover:to-[#d4a726] text-black font-black text-xs sm:text-sm tracking-wide shadow-gold flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Validar Meu Plano Wellhub
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
