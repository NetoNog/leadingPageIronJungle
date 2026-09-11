import React, { useState } from 'react'
import { Check, Target, CalendarCheck, Sparkles, ChevronLeft, ChevronRight, Users, Maximize2 } from 'lucide-react'
import Lightbox from './ui/Lightbox.jsx'

export default function Structure() {
  const [activePhoto, setActivePhoto] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const realPhotos = [
    {
      src: '/assets/estrutura2.JPG',
      title: 'Maquinário de Biomecânica Precisa',
      desc: 'Área com equipamentos robustos, anilhas olímpicas e ambiente 100% climatizado no Benfica.',
    },
    {
      src: '/assets/background.jpg',
      title: 'Maquinário de Força & Ergometria',
      desc: 'Ambiente climatizado com bikes, esteiras e aparelhos calibrados de musculação.',
    },
    {
      src: '/assets/estrutura1.jpg',
      title: 'Identidade Biofílica & Mural do Leão',
      desc: 'Salão com plantas naturais e o marcante grafite do leão feito pelo artista cearense Zé Victor.',
    },
    {
      src: '/assets/equipe2.PNG',
      title: 'Professores Qualificados & Presentes',
      desc: 'Equipe especializada com foco em execução correta, hipertrofia e alívio de dores posturais.',
    },
    {
      src: '/assets/equipe1.jpg',
      title: 'Acolhimento desde o Primeiro Dia',
      desc: 'Ambiente onde o aluno iniciante recebe atenção total e aprende a treinar com segurança.',
    },
    {
      src: '/assets/equipe3.jpg',
      title: 'Acompanhamento Humanizado em Cada Série',
      desc: 'Treinadores presentes que orientam postura, cargas e te motivam diariamente.',
    },
  ]

  const nextPhoto = () => {
    setActivePhoto((prev) => (prev + 1) % realPhotos.length)
  }

  const prevPhoto = () => {
    setActivePhoto((prev) => (prev - 1 + realPhotos.length) % realPhotos.length)
  }

  return (
    <section id="estrutura" className="py-20 bg-[#070b09] border-y border-[#26241a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Galeria de Fotos Reais da Iron Jungle */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#a6861c]/40 shadow-gold group bg-[#0e1210] flex flex-col">
              
              {/* Área da Foto sem Cortes (Visualização Completa 100%) */}
              <div className="relative w-full h-[360px] sm:h-[450px] md:h-[480px] bg-[#050706] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                {/* Fundo suave com efeito de brilho da própria foto */}
                <img 
                  src={realPhotos[activePhoto].src} 
                  alt="" 
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 pointer-events-none scale-110"
                />

                {/* Imagem Real Ativa por Inteiro (clicável para tela cheia) */}
                <img 
                  src={realPhotos[activePhoto].src} 
                  alt={realPhotos[activePhoto].title} 
                  className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-[1.02]"
                  onClick={() => setLightboxOpen(true)}
                />

                {/* Botão de Zoom / Fullscreen */}
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Ver foto em tela cheia"
                  className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/75 hover:bg-[#d4a726] text-white hover:text-black border border-[#a6861c]/40 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Botões de Navegação da Galeria */}
                <button
                  type="button"
                  onClick={prevPhoto}
                  aria-label="Foto anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/75 hover:bg-[#d4a726] text-white hover:text-black border border-[#a6861c]/40 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={nextPhoto}
                  aria-label="Próxima foto"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/75 hover:bg-[#d4a726] text-white hover:text-black border border-[#a6861c]/40 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Legenda Posicionada Abaixo da Foto para NÃO cobrir a imagem */}
              <div className="bg-[#0e1210] border-t border-[#26241a] p-4 sm:p-5 z-20">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <p className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#d4a726] flex-shrink-0" />
                    <span>{realPhotos[activePhoto].title}</span>
                  </p>
                  <span className="text-[10px] font-bold text-[#f5d565] bg-[#a6861c]/20 border border-[#a6861c]/30 px-2.5 py-0.5 rounded-full flex-shrink-0">
                    Foto {activePhoto + 1} de {realPhotos.length}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {realPhotos[activePhoto].desc}
                </p>

                {/* Miniaturas de navegação rápida */}
                <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-[#1c221e]">
                  <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                    {realPhotos.map((photo, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActivePhoto(i)}
                        aria-label={`Ver foto ${i + 1}`}
                        className={`relative rounded-lg overflow-hidden border transition-all cursor-pointer w-10 h-8 sm:w-12 sm:h-9 flex-shrink-0 bg-[#050706] p-0.5 ${
                          activePhoto === i ? 'border-[#d4a726] ring-1 ring-[#d4a726]' : 'border-[#26241a] opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={photo.src} alt="" className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap hidden sm:inline-block">
                    Foto inteira • Sem cortes
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Texto Explicativo com Detalhes da Iron Jungle */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4a726]">Estrutura & Equipe Real</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white mt-2 mb-6">
              A 100m da Gentilândia: <span className="text-gradient-gold">Climatizada & Biofílica</span>.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              A <strong>Iron Jungle Academia</strong> combina o design industrial com biofilia (estruturas metálicas e plantas naturais) e o grafite marcante do leão feito pelo artista <strong>Zé Victor</strong>. Um espaço pensado para inspirar força, saúde e constância.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#a6861c]/15 border border-[#a6861c]/30 flex items-center justify-center text-[#f5d565] font-bold flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Ambiente 100% Climatizado</h4>
                  <p className="text-slate-400 text-sm">Treine com conforto térmico mesmo no calor de Fortaleza, sem sensação abafada.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#a6861c]/15 border border-[#a6861c]/30 flex items-center justify-center text-[#f5d565] font-bold flex-shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Professores Especializados em Saúde Articular</h4>
                  <p className="text-slate-400 text-sm">Acompanhamento voltado para alívio de dores na coluna/joelhos, prevenção de lesões e treino para a melhor idade.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#a6861c]/15 border border-[#a6861c]/30 flex items-center justify-center text-[#f5d565] font-bold flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Vestiários com Chuveiro & Bicicletário</h4>
                  <p className="text-slate-400 text-sm">Armários individuais, duchas higienizadas e espaço para quem vem pedalando pela Gentilândia.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://api.whatsapp.com/send/?phone=5585981749877&text=Olá!%20Gostaria%20de%20visitar%20a%20estrutura%20da%20Iron%20Jungle%20hoje." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a726] to-[#a6861c] hover:from-[#f5d565] hover:to-[#d4a726] text-black font-extrabold text-sm tracking-wide shadow-gold transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              Agendar Visita e Conhecer Pessoalmente
            </a>

          </div>

        </div>

      </div>

      {/* Lightbox em Tela Cheia */}
      <Lightbox
        isOpen={lightboxOpen}
        photo={{
          src: realPhotos[activePhoto].src,
          title: realPhotos[activePhoto].title,
          desc: realPhotos[activePhoto].desc
        }}
        onNext={nextPhoto}
        onPrev={prevPhoto}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  )
}
