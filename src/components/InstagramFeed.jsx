import React, { useState, useRef } from 'react'
import { Instagram, Play, Pause, Volume2, VolumeX, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react'

export default function InstagramFeed() {
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

  const instaPosts = [
    {
      img: '/assets/background.jpg',
      caption: 'A selva está aberta! Estrutura biofílica, arte do leão por Zé Victor e iluminação pensada para sua força.',
      likes: '428',
      comments: '34',
      link: 'https://www.instagram.com/ironjungleacademia'
    },
    {
      img: '/assets/estrutura2.JPG',
      caption: 'Área completa de pesos livres, anilhas olímpicas e ambiente 100% climatizado no Benfica.',
      likes: '356',
      comments: '29',
      link: 'https://www.instagram.com/ironjungleacademia'
    },
    {
      img: '/assets/equipe1.jpg',
      caption: 'Nosso time no salão: professores que realmente orientam execução e biomecânica do início ao fim.',
      likes: '512',
      comments: '47',
      link: 'https://www.instagram.com/ironjungleacademia'
    },
    {
      img: '/assets/res1.JPEG',
      caption: 'Constância gera resultado real! Mais uma evolução acompanhada de perto pela nossa equipe.',
      likes: '389',
      comments: '31',
      link: 'https://www.instagram.com/ironjungleacademia'
    },
  ]

  return (
    <section id="instagram" className="py-24 bg-[#050706] border-t border-[#26241a] relative overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#a6861c]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Instagram className="w-3.5 h-3.5" />
              Instagram Oficial • @ironjungleacademia
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white">
              Acompanhe a <span className="text-gradient-gold">energia diária</span> da selva.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Vídeos de treinos, técnicas de execução, rotina dos alunos e os bastidores da melhor academia do Benfica.
            </p>
          </div>

          <a 
            href="https://www.instagram.com/ironjungleacademia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] to-[#cc2366] text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Grade: Reel em Destaque + Grid de Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Coluna do Reel Real (Vídeo Oficial) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden border-2 border-[#a6861c]/40 shadow-gold bg-black group">
              
              <video 
                ref={videoRef}
                src="/assets/video.mp4" 
                autoPlay 
                loop 
                muted={isMuted} 
                playsInline 
                className="w-full h-full object-cover"
              />

              {/* Controles sobre o Vídeo */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                <button 
                  type="button"
                  onClick={toggleMute}
                  aria-label="Ativar/Desativar som"
                  className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#d4a726] hover:text-black transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button 
                  type="button"
                  onClick={togglePlay}
                  aria-label="Pausar/Reproduzir vídeo"
                  className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#d4a726] hover:text-black transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </div>

              {/* Overlay inferior estilo Instagram Reel */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/60 to-transparent z-20 flex flex-col justify-end">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-full border-2 border-[#d4a726] overflow-hidden bg-black/60 flex items-center justify-center">
                    <img src="/assets/logo-nome-horizontal.png" alt="Logo" className="w-6 h-auto" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white leading-none block">ironjungleacademia</span>
                    <span className="text-[10px] text-[#d4a726] font-semibold flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> Benfica, Fortaleza
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                  "O treino que você respeita no coração do Benfica. Força, técnica e acolhimento de verdade!"
                </p>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10 text-xs text-slate-300">
                  <span className="flex items-center gap-1 text-pink-400 font-semibold">
                    <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" /> 1.2k curtidas
                  </span>
                  <a 
                    href="https://www.instagram.com/ironjungleacademia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#d4a726] hover:underline font-bold"
                  >
                    Ver no Instagram →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Coluna dos Posts do Feed (4 Fotos Reais) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              {instaPosts.map((post, idx) => (
                <a 
                  key={idx}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl overflow-hidden border border-[#26241a] aspect-square bg-[#050706] hover:border-[#d4a726]/60 transition-all duration-300 flex items-center justify-center p-2 sm:p-3"
                >
                  {/* Fundo suave com efeito de brilho da própria foto */}
                  <img 
                    src={post.img} 
                    alt="" 
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 scale-110 pointer-events-none"
                  />

                  {/* Foto Real Completa 100% sem cortes */}
                  <img 
                    src={post.img} 
                    alt={post.caption} 
                    className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay ao passar o mouse com dados do Instagram */}
                  <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                    <div className="flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1 text-pink-400 font-bold">
                        <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                        {post.likes}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-300 font-semibold">
                        <MessageCircle className="w-3.5 h-3.5" />
                        {post.comments}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-200 line-clamp-3 leading-snug">
                      {post.caption}
                    </p>

                    <div className="text-[10px] text-[#d4a726] font-bold flex items-center gap-1">
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Abrir no Instagram</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 text-center lg:text-left text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              <span>Novos vídeos e reels publicados semanalmente no <strong>@ironjungleacademia</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
