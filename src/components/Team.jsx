import React, { useState } from 'react'
import { Award, HeartPulse, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle, Maximize2 } from 'lucide-react'
import Lightbox from './ui/Lightbox.jsx'

export default function Team() {
  const [activePhoto, setActivePhoto] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const teamPhotos = [
    {
      src: '/assets/equipe2.PNG',
      caption: 'Equipe de instrutores e professores presentes no salão da Iron Jungle.',
      title: 'Professores Qualificados & Presentes'
    },
    {
      src: '/assets/equipe1.jpg',
      caption: 'Acolhimento humanizado e orientação desde o primeiro treino.',
      title: 'Acolhimento desde o Primeiro Dia'
    },
    {
      src: '/assets/equipe3.jpg',
      caption: 'Correção biomecânica e acompanhamento para execução segura.',
      title: 'Acompanhamento Humanizado em Cada Série'
    },
    {
      src: '/assets/equipe4.jpg',
      caption: 'Professores capacitados para alunos iniciantes e atletas de força.',
      title: 'Especialistas em Adaptação & Hipertrofia'
    },
    {
      src: '/assets/equipe5.JPG',
      caption: 'Equipe pronta para ajustar seu treino às suas metas de saúde e hipertrofia.',
      title: 'Equipe Especializada no Benfica'
    },
  ]

  const nextPhoto = () => setActivePhoto((prev) => (prev + 1) % teamPhotos.length)
  const prevPhoto = () => setActivePhoto((prev) => (prev - 1 + teamPhotos.length) % teamPhotos.length)

  return (
    <section id="equipe" className="py-24 bg-[#0a0d0b] border-t border-[#26241a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Carrossel de Fotos da Equipe */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#a6861c]/40 shadow-gold bg-[#0e1210] flex flex-col">
              
              {/* Área da Foto sem Cortes (Visualização Completa 100%) */}
              <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] bg-[#050706] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                {/* Fundo suave com efeito de brilho da própria foto */}
                <img 
                  src={teamPhotos[activePhoto].src} 
                  alt="" 
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 pointer-events-none scale-110"
                />

                {/* Foto Real Ativa por Inteiro (clicável para tela cheia) */}
                <img 
                  src={teamPhotos[activePhoto].src} 
                  alt={teamPhotos[activePhoto].title || 'Equipe Iron Jungle Academia'} 
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

                {/* Controles do Carrossel */}
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
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#d4a726] flex-shrink-0" />
                    <span>{teamPhotos[activePhoto].title}</span>
                  </h4>
                  <span className="text-[10px] font-bold text-[#f5d565] bg-[#a6861c]/20 border border-[#a6861c]/30 px-2.5 py-0.5 rounded-full flex-shrink-0">
                    Equipe {activePhoto + 1} de {teamPhotos.length}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {teamPhotos[activePhoto].caption}
                </p>

                {/* Miniaturas dos membros da equipe */}
                <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-[#1c221e]">
                  <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                    {teamPhotos.map((photo, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActivePhoto(idx)}
                        aria-label={`Ver foto ${idx + 1}`}
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

          {/* Texto Oficial da Seção Equipe */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a6861c]/15 border border-[#a6861c]/30 text-[#f5d565] text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              Suporte Profissional & Pós-Graduados
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight mb-6">
              Nossa Equipe: Treine com <span className="text-gradient-gold">segurança e suporte</span> de verdade.
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Na <strong>Iron Jungle</strong>, você treina com suporte profissional contínuo. Nossa equipe é altamente qualificada, com formação, cursos e pós-graduações voltadas para <strong>dores musculoesqueléticas, doenças cardiovasculares, diabetes e treinamento para a terceira idade</strong>.
              </p>
              <p>
                Sabemos que muitas pessoas buscam a musculação para <strong>aliviar dores lombares, no joelho, ombros e articulações</strong>, comuns devido ao sedentarismo, má postura e rotina de trabalho/estudo no Benfica. Além disso, atendemos muitos idosos que querem ganhar força, equilíbrio e mobilidade, prevenindo quedas e melhorando a qualidade de vida.
              </p>
              <p>
                Aqui, seu treino é <strong>ajustado conforme suas necessidades</strong>, respeitando limitações para que você evolua com saúde, segurança e longevidade.
              </p>
            </div>

            <div className="mt-8 space-y-3 pt-6 border-t border-[#26241a]">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#d4a726] flex-shrink-0" />
                <span>Alívio de dores lombares, joelho e coluna</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#d4a726] flex-shrink-0" />
                <span>Programas especiais para a terceira idade e iniciantes</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#d4a726] flex-shrink-0" />
                <span>Acompanhamento direto no salão por professores de verdade</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox para fotos da equipe */}
      <Lightbox
        isOpen={lightboxOpen}
        photo={{
          src: teamPhotos[activePhoto].src,
          title: teamPhotos[activePhoto].title,
          desc: teamPhotos[activePhoto].caption
        }}
        onNext={nextPhoto}
        onPrev={prevPhoto}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  )
}
