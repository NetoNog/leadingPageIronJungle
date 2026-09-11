import React, { useState } from 'react'
import { Smartphone, Trophy, TrendingUp, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import Lightbox from './ui/Lightbox.jsx'

export default function Results() {
  const [activePhoto, setActivePhoto] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const transformationPhotos = [
    {
      src: '/assets/res1.JPEG',
      title: 'Evolução e Recomposição Corporal',
      caption: 'Alunos que construíram constância com fichas individuais no aplicativo exclusivo.',
    },
    {
      src: '/assets/res2.jpg',
      title: 'Ganho de Força & Densidade Muscular',
      caption: 'Progressão contínua com acompanhamento de cargas e execução precisa.',
    },
    {
      src: '/assets/res4.JPG',
      title: 'Superação Diária e Foco',
      caption: 'Resultados duradouros sem promessas milagrosas: método e disciplina no Benfica.',
    },
    {
      src: '/assets/res5.jpg',
      title: 'Transformação Real de Hábitos',
      caption: 'Acompanhamento do app e dos professores para manter a consistência semana após semana.',
    },
    {
      src: '/assets/res3.jpeg',
      title: 'Desenvolvimento e Vitalidade',
      caption: 'Melhora estética combinada com saúde articular e disposição no trabalho e estudos.',
    },
  ]

  const nextPhoto = () => setActivePhoto((prev) => (prev + 1) % transformationPhotos.length)
  const prevPhoto = () => setActivePhoto((prev) => (prev - 1 + transformationPhotos.length) % transformationPhotos.length)

  return (
    <section id="resultados" className="py-24 bg-[#050706] border-t border-[#26241a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Texto Oficial da Seção Resultados */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a6861c]/15 border border-[#a6861c]/30 text-[#f5d565] text-xs font-bold uppercase tracking-wider mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Evolução Comprovada
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight mb-6">
              Seus Resultados: Aplicativo exclusivo e <span className="text-gradient-gold">ranking mensal</span> com brindes.
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Na <strong>Iron Jungle</strong>, seu progresso é nossa prioridade. Estamos comprometidos em ajudá-lo a alcançar resultados tangíveis e duradouros.
              </p>
              <p>
                Para otimizar sua evolução, disponibilizamos um <strong>aplicativo exclusivo para nossos alunos</strong>. Nele, você acessa seu treino personalizado, acompanha seu desempenho, faz anotações e assiste a vídeos demonstrativos de cada exercício para garantir que você siga seu plano corretamente.
              </p>
              <p>
                Além disso, temos um <strong>ranking mensal dos alunos mais frequentes</strong>, onde o primeiro lugar ganha brindes exclusivos da Iron Jungle! Uma motivação extra para manter a consistência e superar seus limites toda semana.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#26241a]">
              <div className="bg-[#0e1210] p-5 rounded-2xl border border-[#26241a] flex items-start gap-3">
                <Smartphone className="w-6 h-6 text-[#d4a726] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-sm">App Exclusivo do Aluno</h4>
                  <p className="text-xs text-slate-400 mt-1">Fichas digitais, vídeos dos exercícios e histórico de cargas.</p>
                </div>
              </div>

              <div className="bg-[#0e1210] p-5 rounded-2xl border border-[#26241a] flex items-start gap-3">
                <Trophy className="w-6 h-6 text-[#d4a726] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-sm">Ranking de Frequência</h4>
                  <p className="text-xs text-slate-400 mt-1">Premiações e brindes para os alunos mais constantes do mês.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carrossel de Fotos Reais de Alunos */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#a6861c]/40 shadow-gold bg-[#0e1210] flex flex-col">
              
              {/* Área da Foto sem Cortes (Visualização Completa 100%) */}
              <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] bg-[#050706] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                {/* Fundo suave com efeito de brilho da própria foto */}
                <img 
                  src={transformationPhotos[activePhoto].src} 
                  alt="" 
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 pointer-events-none scale-110"
                />

                {/* Foto Real Ativa por Inteiro (clicável para tela cheia) */}
                <img 
                  src={transformationPhotos[activePhoto].src} 
                  alt={transformationPhotos[activePhoto].title || 'Resultado de Aluno Iron Jungle'} 
                  className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-[1.02]"
                  onClick={() => setLightboxOpen(true)}
                />

                {/* Botão de Zoom / Fullscreen */}
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Ver em tela cheia"
                  className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/75 hover:bg-[#d4a726] text-white hover:text-black border border-[#a6861c]/40 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Botões do carrossel */}
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

              {/* Legenda Externa abaixo da foto para NÃO tapar a imagem */}
              <div className="bg-[#0e1210] border-t border-[#26241a] p-4 sm:p-5 z-20">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-black uppercase text-[#d4a726] bg-[#a6861c]/20 border border-[#a6861c]/30 px-2.5 py-0.5 rounded-full flex-shrink-0">
                    Caso Real {activePhoto + 1} de {transformationPhotos.length}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Clique na foto para ampliar
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  {transformationPhotos[activePhoto].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {transformationPhotos[activePhoto].caption}
                </p>

                {/* Miniaturas de navegação rápida */}
                <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-[#1c221e]">
                  <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                    {transformationPhotos.map((photo, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActivePhoto(idx)}
                        aria-label={`Ver evolução ${idx + 1}`}
                        className={`relative rounded-lg overflow-hidden border transition-all cursor-pointer w-10 h-8 sm:w-12 sm:h-9 flex-shrink-0 bg-[#050706] p-0.5 ${
                          activePhoto === idx ? 'border-[#d4a726] ring-1 ring-[#d4a726]' : 'border-[#26241a] opacity-60 hover:opacity-100'
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

        </div>

      </div>

      {/* Lightbox para fotos dos alunos */}
      <Lightbox
        isOpen={lightboxOpen}
        photo={{
          src: transformationPhotos[activePhoto].src,
          title: transformationPhotos[activePhoto].title,
          desc: transformationPhotos[activePhoto].caption
        }}
        onNext={nextPhoto}
        onPrev={prevPhoto}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  )
}
