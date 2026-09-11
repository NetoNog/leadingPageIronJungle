import React, { useState } from 'react'
import { Plus, Minus, MessageCircle } from 'lucide-react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'Nunca pisei numa academia antes. Vou ter ajuda para aprender os exercícios?',
      a: 'Com certeza! O grande diferencial da Iron Jungle é justamente o nosso acompanhamento humanizado. Nossos professores não ficam presos ao balcão: eles ensinam a postura correta, ajustam as cargas e acompanham cada série para você ganhar confiança desde o primeiro dia.',
    },
    {
      q: 'Como faço para me matricular na Iron Jungle?',
      a: 'A matrícula é 100% online e rápida através do sistema oficial da Tecnofit. Basta escolher seu plano (Anual Parcelado ou Anual Recorrente) na seção de planos e finalizar seu cadastro com total segurança.',
    },
    {
      q: 'A academia aceita Wellhub (Gympass) ou TotalPass?',
      a: 'Sim! Somos credenciados oficiais no Wellhub. Você pode realizar o check-in diário diretamente no seu aplicativo e usufruir de todas as áreas de musculação, força e esteiras sem taxas extras.',
    },
    {
      q: 'Quais são as formas de pagamento disponíveis?',
      a: 'Aceitamos cartões de crédito para os planos Anual Parcelado (em 12x cobrando o valor total) e Anual Recorrente (com débito automático mensal de R$ 99,90 sem comprometer o limite total do seu cartão).',
    },
    {
      q: 'A academia é só para quem treina muito pesado ou atletas de força?',
      a: 'Não! Apesar de termos uma das melhores estruturas de ferro livre de Fortaleza para quem pratica levantamento e força, a grande maioria dos nossos alunos são pessoas comuns buscando saúde, perda de gordura, alívio de estresse e bem-estar físico. Todos são acolhidos com muito respeito.',
    },
    {
      q: 'Tem estacionamento ou local para guardar motos/bicicletas?',
      a: 'Sim! Há facilidade de estacionamento na própria Rua João Gentil e vias arborizadas adjacentes do Benfica, além de espaço seguro para motos e bicicletas bem em frente à academia.',
    },
  ]

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-24 bg-[#050706] border-t border-[#26241a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4a726]">Tire suas dúvidas</span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white mt-2">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Tudo o que você precisa saber antes de iniciar seu primeiro treino na Iron Jungle.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div 
                key={idx}
                className="bg-[#0e1210] border border-[#26241a] rounded-2xl overflow-hidden transition-colors"
              >
                <button 
                  type="button" 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-base text-white">{faq.q}</span>
                  <div className="w-8 h-8 rounded-lg bg-[#050706] border border-[#26241a] flex items-center justify-center flex-shrink-0 text-[#d4a726]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-[#26241a] pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-400">
            Ficou com outra dúvida?{' '}
            <a 
              href="https://wa.me/5585981749877?text=Olá!%20Ainda%20tenho%20uma%20dúvida%20sobre%20a%20Iron%20Jungle." 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#d4a726] hover:text-[#f5d565] font-bold hover:underline inline-flex items-center gap-1"
            >
              Converse diretamente com nosso time no WhatsApp <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}
