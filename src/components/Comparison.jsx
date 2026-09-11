import React from 'react'
import { XCircle, CheckCircle2, X, Check } from 'lucide-react'

export default function Comparison() {
  return (
    <section className="py-16 bg-[#050706] border-y border-[#26241a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4a726]">Por que somos diferentes</span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading mt-2 text-white">
            Você não é mais um número de catraca.
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Compare a experiência padrão das grandes redes com o padrão de acompanhamento da Iron Jungle no Benfica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card O Problema */}
          <div className="rounded-2xl p-7 bg-[#111614] border border-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 text-[11px] font-bold uppercase px-3 py-1 rounded-bl-xl">
              Academias Comuns / Low-Cost
            </div>
            <h3 className="text-lg font-bold text-red-400 mb-5 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" /> O que você encontra por aí:
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span><strong>Instrutores distantes:</strong> Presos a celulares ou conversas paralelas, sem olhar sua postura.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span><strong>Filas intermináveis:</strong> Esperando 15 minutos para revezar um único aparelho no horário de pico.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span><strong>Sensação de intimidação:</strong> Faltam orientações claras para quem está começando agora.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                <span><strong>Multas e fidelidades abusivas:</strong> Contratos complicados feitos para prender você.</span>
              </li>
            </ul>
          </div>

          {/* Card A Solução */}
          <div className="rounded-2xl p-7 bg-[#0e1210] border-2 border-[#d4a726] shadow-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black text-[11px] font-black uppercase px-3.5 py-1 rounded-bl-xl shadow-sm">
              Padrão Iron Jungle
            </div>
            <h3 className="text-lg font-bold text-[#f5d565] mb-5 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#d4a726]" /> O que você vive aqui:
            </h3>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#d4a726] mt-1 flex-shrink-0" />
                <span><strong>Acompanhamento de verdade:</strong> Professores dedicados que orientam execução, cargas e segurança.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#d4a726] mt-1 flex-shrink-0" />
                <span><strong>Biomecânica & Ferro Pesado:</strong> Anilhas, barras olímpicas, halteres robustos e maquinário calibrado.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#d4a726] mt-1 flex-shrink-0" />
                <span><strong>Acolhimento humanizado:</strong> Você se sente em casa desde o 1º dia, sem julgamentos ou frescura.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#d4a726] mt-1 flex-shrink-0" />
                <span><strong>Preço justo e transparente:</strong> Planos claros com checkout oficial seguro e suporte humanizado.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
