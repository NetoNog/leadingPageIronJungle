import React, { useState } from 'react'
import { Calculator, MessageCircle, Clock, Sparkles } from 'lucide-react'

export default function BmiCalculator() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [objetivo, setObjetivo] = useState('Hipertrofia e Ganho de Massa')
  const [turno, setTurno] = useState('Noite (17h às 22h)')
  const [resultado, setResultado] = useState(null)

  const handleCalculate = (e) => {
    e.preventDefault()
    const p = parseFloat(peso)
    const a = parseFloat(altura)

    if (!p || !a || p <= 0 || a <= 0) return

    const alturaM = a / 100
    const imcValor = (p / (alturaM * alturaM)).toFixed(1)

    let classificacao = ''
    let recomendacao = ''

    if (imcValor < 18.5) {
      classificacao = 'Abaixo do peso ideal'
      recomendacao = 'Seu foco principal na Iron Jungle será hipertrofia e fortalecimento muscular, com superávit calórico e treino progressivo de força guiado por nossos treinadores.'
    } else if (imcValor < 24.9) {
      classificacao = 'Peso Saudável & Equilibrado'
      recomendacao = 'Excelente composição de base! Você tem o perfil ideal para iniciar nosso programa de progressão de cargas, densidade muscular e condicionamento atlético.'
    } else if (imcValor < 29.9) {
      classificacao = 'Sobrepeso leve (Ideal para Recomposição)'
      recomendacao = 'Com a musculação de alta intensidade e o setor de ergometria da Iron Jungle, vamos acelerar sua queima calórica e converter gordura em massa magra com acompanhamento postural.'
    } else {
      classificacao = 'Recomposição Muscular Prioritária'
      recomendacao = 'Nosso acompanhamento humanizado com foco em preservação articular vai fortalecer sua coluna e joelhos enquanto transforma sua disposição e vitalidade.'
    }

    const whatsappMsg = `Olá! Calculei meu IMC no site da Iron Jungle:\n- Peso: ${p}kg\n- Altura: ${a}cm\n- IMC: ${imcValor} (${classificacao})\n- Meu Objetivo: ${objetivo}\n- Turno Preferido: ${turno}\n\nGostaria de conhecer os planos da Iron Jungle!`

    setResultado({
      imc: imcValor,
      classificacao,
      recomendacao,
      whatsappUrl: `https://wa.me/5585981749877?text=${encodeURIComponent(whatsappMsg)}`
    })
  }

  return (
    <section id="calculadora" className="py-20 bg-[#050706] border-y border-[#26241a] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0e1210] border border-[#a6861c]/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a6861c]/15 border border-[#a6861c]/30 text-[#f5d565] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#d4a726]" />
              Ferramenta de Diagnóstico Gratuita
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white mt-3">
              Descubra seu IMC e seu Treino Ideal no Benfica
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Preencha seus dados para receber uma recomendação personalizada e o melhor turno para treinar sem fila.
            </p>
          </div>

          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Peso */}
              <div>
                <label htmlFor="peso-input" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Seu Peso (kg)
                </label>
                <div className="relative">
                  <input 
                    id="peso-input"
                    type="number" 
                    placeholder="Ex: 75" 
                    min="30" 
                    max="250" 
                    step="0.5" 
                    required
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    className="w-full bg-[#050706] border border-[#26241a] rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4a726] focus:ring-1 focus:ring-[#d4a726] transition-colors text-sm"
                  />
                  <span className="absolute right-4 top-3.5 text-slate-500 text-xs font-bold">KG</span>
                </div>
              </div>

              {/* Altura */}
              <div>
                <label htmlFor="altura-input" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Sua Altura (cm)
                </label>
                <div className="relative">
                  <input 
                    id="altura-input"
                    type="number" 
                    placeholder="Ex: 175" 
                    min="100" 
                    max="230" 
                    required
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    className="w-full bg-[#050706] border border-[#26241a] rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4a726] focus:ring-1 focus:ring-[#d4a726] transition-colors text-sm"
                  />
                  <span className="absolute right-4 top-3.5 text-slate-500 text-xs font-bold">CM</span>
                </div>
              </div>

              {/* Objetivo */}
              <div>
                <label htmlFor="objetivo-select" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Objetivo Principal
                </label>
                <select 
                  id="objetivo-select"
                  value={objetivo}
                  onChange={(e) => setObjetivo(e.target.value)}
                  className="w-full bg-[#050706] border border-[#26241a] rounded-xl px-3 py-3.5 text-white focus:outline-none focus:border-[#d4a726] focus:ring-1 focus:ring-[#d4a726] transition-colors text-xs sm:text-sm"
                >
                  <option value="Hipertrofia e Ganho de Massa">Hipertrofia & Massa</option>
                  <option value="Emagrecimento e Definição">Emagrecimento & Definição</option>
                  <option value="Ganho de Força Bruta (Powerlifting)">Força / Powerlifting</option>
                  <option value="Saúde Geral e Qualidade de Vida">Saúde & Postura</option>
                </select>
              </div>

              {/* Turno Preferencial (Regra de Negócio) */}
              <div>
                <label htmlFor="turno-select" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#d4a726]" />
                  Turno de Treino
                </label>
                <select 
                  id="turno-select"
                  value={turno}
                  onChange={(e) => setTurno(e.target.value)}
                  className="w-full bg-[#050706] border border-[#26241a] rounded-xl px-3 py-3.5 text-white focus:outline-none focus:border-[#d4a726] focus:ring-1 focus:ring-[#d4a726] transition-colors text-xs sm:text-sm"
                >
                  <option value="Manhã (06h às 10h)">Manhã (06h às 10h)</option>
                  <option value="Almoço / Meio-dia (11h às 14h)">Almoço (11h às 14h)</option>
                  <option value="Tarde (14h às 17h)">Tarde (14h às 17h)</option>
                  <option value="Noite (17h às 22h)">Noite (17h às 22h)</option>
                </select>
              </div>

            </div>

            <div className="text-center pt-2">
              <button 
                type="submit" 
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#d4a726] via-[#f5d565] to-[#a6861c] text-black font-black text-sm tracking-wider uppercase shadow-gold hover:shadow-gold-glow transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto"
              >
                <Calculator className="w-4 h-4" />
                Calcular Meu Plano & Recomendação
              </button>
            </div>
          </form>

          {/* Resultado do IMC */}
          {resultado && (
            <div className="mt-8 pt-8 border-t border-[#26241a] animate-fadeIn">
              <div className="bg-black/70 border border-[#a6861c]/40 rounded-2xl p-6 text-center sm:text-left sm:flex items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-bold uppercase text-[#f5d565] tracking-wider">
                    Diagnóstico Personalizado
                  </div>
                  <div className="text-2xl font-black text-white mt-1 flex items-baseline gap-2 justify-center sm:justify-start">
                    IMC: <span className="text-[#d4a726]">{resultado.imc}</span>
                    <span className="text-sm font-semibold text-slate-300">({resultado.classificacao})</span>
                  </div>
                  <p className="text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                    {resultado.recomendacao}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#f5d565] bg-[#a6861c]/15 px-3 py-1.5 rounded-lg border border-[#a6861c]/30">
                    <Clock className="w-3.5 h-3.5" />
                    Turno desejado: {turno}
                  </div>
                </div>

                <div className="mt-5 sm:mt-0 flex-shrink-0">
                  <a 
                    href={resultado.whatsappUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a726] to-[#a6861c] hover:from-[#f5d565] hover:to-[#d4a726] text-black font-extrabold text-sm shadow-gold transition-transform hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enviar Meta no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
