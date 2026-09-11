import React, { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, MapPin, Sparkles, CheckCircle2 } from 'lucide-react'

export default function About() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section id="sobre" className="py-24 bg-[#0a0d0b] border-y border-[#26241a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Texto Oficial "Sobre Nós" */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a6861c]/15 border border-[#a6861c]/30 text-[#f5d565] text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              100m da Praça Gentilândia • Benfica
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight mb-6">
              Sobre Nós: O treino que você respeita na <span className="text-gradient-gold">rua mais boêmia</span> do Benfica.
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Localizada no coração do Benfica, a apenas <strong>100 metros da Praça Gentilândia</strong>, na rua mais boêmia do bairro, a <strong>Iron Jungle Academia</strong> é o lugar perfeito para qualquer pessoa que deseja melhorar a saúde e o bem-estar.
              </p>
              <p>
                Seja você um iniciante ou alguém experiente no treino, nosso ambiente acolhedor e motivador garante que todos se sintam confortáveis, respeitados e confiantes desde o primeiro dia.
              </p>
              <p>
                Nossa equipe de professores está sempre pronta para apoiar sua jornada no salão, independentemente do seu nível, ajudando você a alcançar seus objetivos com acompanhamento humanizado e dedicação total.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#26241a]">
              <div className="bg-[#0e1210] p-4 rounded-2xl border border-[#26241a]">
                <div className="text-2xl font-black text-[#d4a726] font-heading">100m</div>
                <div className="text-xs text-slate-400 mt-1">Da Praça da Gentilândia</div>
              </div>
              <div className="bg-[#0e1210] p-4 rounded-2xl border border-[#26241a]">
                <div className="text-2xl font-black text-[#d4a726] font-heading">100%</div>
                <div className="text-xs text-slate-400 mt-1">Ambiente Climatizado</div>
              </div>
              <div className="bg-[#0e1210] p-4 rounded-2xl border border-[#26241a]">
                <div className="text-2xl font-black text-[#d4a726] font-heading">Zero</div>
                <div className="text-xs text-slate-400 mt-1">Frescura & Julgamentos</div>
              </div>
            </div>
          </div>

          {/* Vídeo Oficial da Iron Jungle */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#a6861c]/40 shadow-gold bg-black group aspect-[9/14] max-w-sm mx-auto">
              <video 
                ref={videoRef}
                src="/assets/video.mp4" 
                autoPlay 
                loop 
                muted={isMuted} 
                playsInline 
                className="w-full h-full object-contain bg-black"
              />

              {/* Botões de controle de vídeo */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                <button 
                  type="button"
                  onClick={toggleMute}
                  aria-label="Ativar/Desativar áudio"
                  className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#d4a726] hover:text-black transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button 
                  type="button"
                  onClick={togglePlay}
                  aria-label="Pausar/Reproduzir vídeo"
                  className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#d4a726] hover:text-black transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </div>

              {/* Card inferior no vídeo */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent z-20">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#d4a726] animate-ping"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f5d565]">
                    Experiência Iron Jungle
                  </span>
                </div>
                <p className="text-xs text-white leading-relaxed">
                  Ambiente acolhedor, ferro pesado e acompanhamento profissional de verdade.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
