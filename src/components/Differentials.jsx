import React from 'react'
import { HeartHandshake, Dumbbell, Users2, MapPin, ArrowRight } from 'lucide-react'

export default function Differentials() {
  const differentials = [
    {
      icon: <HeartHandshake className="w-7 h-7 text-[#d4a726]" />,
      title: 'Orientação Humanizada',
      desc: 'Nossos treinadores circulam no salão. Você aprende a postura correta em cada levantamento e nunca fica perdido sem saber o que fazer.',
      tag: 'Foco em biomecânica'
    },
    {
      icon: <Dumbbell className="w-7 h-7 text-[#d4a726]" />,
      title: 'Área de Peso Livre Raiz',
      desc: 'Racks de agachamento, bancos estáveis, anilhas abundantes e halteres com progressão real de carga para hipertrofia e força.',
      tag: 'Para quem treina pesado'
    },
    {
      icon: <Users2 className="w-7 h-7 text-[#d4a726]" />,
      title: 'Comunidade que Apoia',
      desc: 'Ambiente de união e incentivo mútuo. Aqui celebramos cada PR (recorde pessoal), cada quilo perdido e cada meta alcançada.',
      tag: 'Energia contagiosa'
    },
    {
      icon: <MapPin className="w-7 h-7 text-[#d4a726]" />,
      title: 'Coração do Benfica',
      desc: 'Rua João Gentil, 250. Fácil acesso perto da Gentilândia, CH UFC e grandes avenidas, ideal para conciliar estudo, trabalho e treino.',
      tag: 'Acesso rápido e seguro'
    },
  ]

  return (
    <section id="diferenciais" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#050706]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a6861c]/15 border border-[#a6861c]/30 text-[#f5d565] text-xs font-bold uppercase tracking-wider mb-3">
            O Padrão da Selva de Ferro
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Pilares construídos para sua <span className="text-gradient-gold">evolução</span>.
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Estrutura e metodologia pensadas para quem quer treinar sério, com saúde, força e consistência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0e1210] border border-[#26241a] rounded-2xl p-7 border-gold-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#a6861c]/15 border border-[#a6861c]/30 flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#26241a] text-xs font-semibold text-[#d4a726] flex items-center gap-1">
                <span>{item.tag}</span> <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
