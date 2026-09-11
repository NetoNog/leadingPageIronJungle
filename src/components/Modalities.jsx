import React, { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function Modalities() {
  const [activeTab, setActiveTab] = useState('todos')

  const modalities = [
    {
      id: 'hipertrofia',
      badge: 'Mais Procurada',
      badgeColor: 'bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black',
      title: 'Musculação & Hipertrofia',
      image: '/assets/estrutura2.JPG',
      desc: 'Ganho de massa magra, definição muscular e fortalecimento articular. Fichas de treino elaboradas conforme seu nível e tempo disponível.',
      features: [
        'Avaliação e montagem de treino individual',
        'Variedade completa de pesos livres',
        'Acompanhamento de evolução de cargas',
      ],
      whatsappMsg: 'Olá! Tenho interesse na musculação para hipertrofia na Iron Jungle.'
    },
    {
      id: 'powerlifting',
      badge: 'Power & Força',
      badgeColor: 'bg-amber-500 text-black',
      title: 'Treinamento de Força',
      image: '/assets/estrutura1.jpg',
      desc: 'Foco nos 3 grandes levantamentos (Agachamento, Supino e Levantamento Terra). Ambiente favorável para atletas e entusiastas de força máxima.',
      features: [
        'Apoio a eventos de Powerlifting (Desafio Valhalla)',
        'Anilhas calibradas e barras maciças',
        'Cultura de superação, magnésio e PRs',
      ],
      whatsappMsg: 'Olá! Quero saber mais sobre o treinamento de força e powerlifting na Iron Jungle.'
    },
    {
      id: 'saude',
      badge: 'Saúde & Vitalidade',
      badgeColor: 'bg-[#a6861c] text-white',
      title: 'Condicionamento & Saúde',
      image: '/assets/equipe3.jpg',
      desc: 'Para quem quer queimar gordura, aliviar dores posturais do trabalho/estudo, ganhar fôlego e conquistar mais disposição no dia a dia.',
      features: [
        'Treinos adaptados e sem impacto para iniciantes',
        'Setor de esteiras e bikes ergométricas',
        'Melhora comprovada da postura e mobilidade',
      ],
      whatsappMsg: 'Olá! Gostaria de começar a treinar para melhorar minha saúde e condicionamento.'
    },
  ]

  const filteredModalities = activeTab === 'todos' 
    ? modalities 
    : modalities.filter(m => m.id === activeTab)

  return (
    <section id="modalidades" className="py-24 bg-[#050706] border-t border-[#26241a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4a726]">Foco no seu objetivo</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white mt-2">
            Modalidades para cada fase da sua jornada.
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Não importa se sua meta é hipertrofia máxima, queima de gordura, saúde ou recordes de carga. Temos o caminho certo.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'todos'
                  ? 'bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black shadow-gold'
                  : 'bg-[#0e1210] text-slate-300 border border-[#26241a] hover:border-[#d4a726]/40'
              }`}
            >
              Todas as Modalidades
            </button>
            <button
              onClick={() => setActiveTab('hipertrofia')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'hipertrofia'
                  ? 'bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black shadow-gold'
                  : 'bg-[#0e1210] text-slate-300 border border-[#26241a] hover:border-[#d4a726]/40'
              }`}
            >
              Musculação & Hipertrofia
            </button>
            <button
              onClick={() => setActiveTab('powerlifting')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'powerlifting'
                  ? 'bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black shadow-gold'
                  : 'bg-[#0e1210] text-slate-300 border border-[#26241a] hover:border-[#d4a726]/40'
              }`}
            >
              Força & Powerlifting
            </button>
            <button
              onClick={() => setActiveTab('saude')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'saude'
                  ? 'bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black shadow-gold'
                  : 'bg-[#0e1210] text-slate-300 border border-[#26241a] hover:border-[#d4a726]/40'
              }`}
            >
              Saúde & Condicionamento
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredModalities.map((item) => (
            <div 
              key={item.id}
              className="bg-[#0e1210] border border-[#26241a] rounded-2xl overflow-hidden hover:border-[#d4a726]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="h-56 sm:h-64 overflow-hidden relative bg-[#050706] flex items-center justify-center p-3 border-b border-[#1c221e]">
                  {/* Fundo suave com efeito de brilho da própria foto */}
                  <img 
                    src={item.image} 
                    alt="" 
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 scale-110 pointer-events-none"
                  />
                  {/* Foto Real Completa 100% sem cortes */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 shadow-md"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className={`px-2.5 py-1 rounded-md font-black text-[11px] uppercase tracking-wider shadow-md ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black font-heading text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <ul className="text-xs text-slate-300 space-y-2 mb-6 border-t border-[#26241a] pt-4">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#d4a726] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <a 
                  href={`https://wa.me/5585981749877?text=${encodeURIComponent(item.whatsappMsg)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#050706] border border-[#26241a] hover:border-[#d4a726]/60 text-[#d4a726] hover:text-white text-sm font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Conhecer essa modalidade</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
