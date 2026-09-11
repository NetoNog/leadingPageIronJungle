import React from 'react'
import { Check, Sparkles, ExternalLink } from 'lucide-react'
import { GYM_CONFIG } from '../data/gymData.js'

export default function Pricing() {
  return (
    <section id="planos" className="py-24 bg-[#050706] border-t border-[#26241a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a6861c]/15 border border-[#a6861c]/30 text-[#f5d565] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Nossos Planos
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Escolha o plano ideal para seus <span className="text-gradient-gold">objetivos</span>.
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Matricule-se online diretamente pelo sistema seguro da Tecnofit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Plano 1: Anual Parcelado */}
          <div className="bg-[#0e1210] border border-[#26241a] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-gold-hover relative">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#d4a726] mb-2">
                Maior Economia Anual
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-2">
                ANUAL PARCELADO
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Plano anual com pagamento único parcelado em 12x no cartão de crédito, cobrando o valor total no momento da compra.
              </p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-slate-400">R$</span>
                <span className="text-5xl font-black text-white font-heading">90</span>
                <span className="text-xs text-slate-400 font-semibold">/mês</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 mb-8 border-t border-[#26241a] pt-6">
                <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#d4a726] flex-shrink-0" /> Acesso total e ilimitado no Benfica</li>
                <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#d4a726] flex-shrink-0" /> Acesso ao aplicativo oficial exclusivo</li>
                <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#d4a726] flex-shrink-0" /> Acompanhamento de professores no salão</li>
                <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-[#d4a726] flex-shrink-0" /> Participação no ranking mensal com brindes</li>
              </ul>
            </div>

            <a 
              href="https://app.tecnofit.com.br/ng/online-sale/MTE3NTU1/checkout/NzI0ODE5/forms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-[#141a16] border border-[#a6861c]/50 hover:bg-[#d4a726] hover:text-black text-white font-black text-center text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Quero este plano</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Plano 2: Anual Recorrente (Destaque Oficial) */}
          <div className="bg-[#0e1210] border-2 border-[#d4a726] border-metallic-gold rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-gold-glow relative">
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black font-black text-xs uppercase px-4 py-1.5 rounded-full tracking-wider shadow-md whitespace-nowrap">
              ⭐ Mais Escolhido no Benfica
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#f5d565] mb-2 mt-2">
                Débito Mensal sem Travar Limite
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-2">
                ANUAL RECORRENTE
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Plano anual com fidelidade de 12 meses e cobrança automática de R$99,90 por mês no cartão de crédito.
              </p>
              
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-slate-400">R$</span>
                <span className="text-5xl font-black text-white font-heading">99</span>
                <span className="text-slate-300 font-bold text-base">,90</span>
                <span className="text-xs text-slate-400 font-semibold">/mês</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200 mb-8 border-t border-[#26241a] pt-6">
                <li className="flex items-center gap-2.5 font-semibold text-white">
                  <Check className="w-4 h-4 text-[#d4a726] flex-shrink-0" /> Não consome o limite total do cartão de crédito
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#d4a726] flex-shrink-0" /> Cobrança automática mensal sem boletos
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#d4a726] flex-shrink-0" /> Acesso completo à musculação, esteiras e pesos
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#d4a726] flex-shrink-0" /> App exclusivo com treinos personalizados
                </li>
              </ul>
            </div>

            <a 
              href="https://app.tecnofit.com.br/ng/online-sale/MTE3NTU1/checkout/OTMwNTky/forms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4a726] to-[#a6861c] hover:from-[#f5d565] hover:to-[#d4a726] text-black font-black text-center text-xs sm:text-sm tracking-wider uppercase shadow-gold transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Quero este plano</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
