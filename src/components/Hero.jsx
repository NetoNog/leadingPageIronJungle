import React from 'react'
import { MessageCircle, Star, Users, CheckCircle, ArrowDown, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050706]">
      {/* Background com a foto real dos maquinários e alta opacidade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/assets/background.jpg" 
          alt="Maquinários e Estrutura da Iron Jungle Academia" 
          className="w-full h-full object-cover object-center opacity-50 sm:opacity-60 scale-105 transform"
        />
        {/* Camadas de fusão elegantes para contraste e legibilidade impecável */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050706] via-[#050706]/92 to-[#050706]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050706] via-transparent to-[#050706]/85"></div>
        {/* Glows dourados ambientes */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#a6861c]/15 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#d4a726]/10 blur-[130px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto & Copy Oficial */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Logo Horizontal Oficial */}
            <div className="mb-4">
              <img 
                src="/assets/logo-nome-horizontal.png" 
                alt="Iron Jungle Academia" 
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-lg"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e1210]/95 border border-[#a6861c]/30 text-[#f5d565] text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4a726] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a6861c]"></span>
              </span>
              <span>Bem-vindo à Iron Jungle, a melhor academia do bairro Benfica!</span>
            </div>

            {/* Headline Principal Oficial */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-white mb-6">
              Aqui você constrói sua <span className="text-gradient-gold">melhor versão</span>.<br />
              Treine hoje para <span className="underline decoration-[#d4a726] decoration-4 underline-offset-8">viver melhor amanhã!</span>
            </h1>

            {/* Subheadline Oficial */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Localizada a 100 metros da Praça Gentilândia. Ambiente 100% climatizado, biofilia, área completa de pesos livres e acompanhamento profissional de verdade.
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a 
                href="#planos" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4a726] via-[#f5d565] to-[#a6861c] text-black font-black text-sm sm:text-base tracking-wider uppercase shadow-gold hover:shadow-gold-glow flex items-center justify-center gap-2 transform hover:-translate-y-1 transition-all"
              >
                <span>Conheça Nossos Planos</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a 
                href="https://api.whatsapp.com/send/?phone=5585981749877&text=Olá!%20Gostaria%20de%20informações%20sobre%20os%20planos%20da%20Iron%20Jungle." 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-[#0e1210]/95 border border-[#a6861c]/50 hover:border-[#d4a726] text-white font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 hover:bg-[#161c19] backdrop-blur-md"
              >
                <MessageCircle className="w-4 h-4 text-[#d4a726]" />
                Falar no WhatsApp
              </a>
            </div>

            {/* Micro Prova Social */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#26241a] w-full">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-extrabold text-white text-sm">4.9/5.0</span>
                <span className="text-xs text-slate-400">(no Google Maps)</span>
              </div>
              
              <div className="h-4 w-px bg-[#26241a] hidden sm:block"></div>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <Users className="w-4 h-4 text-[#d4a726]" />
                <span>100m da Gentilândia</span>
              </div>
              
              <div className="h-4 w-px bg-[#26241a] hidden sm:block"></div>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#d4a726]" />
                <span>Ambiente 100% Climatizado</span>
              </div>
            </div>

          </div>

          {/* Coluna Visual: Card Oficial com a Logo e Identidade da Sede */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Moldura neon dourada */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#a6861c] to-[#d4a726] rounded-3xl blur-lg opacity-45 animate-pulse"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-[#a6861c]/50 bg-gradient-to-b from-[#0e1411] via-[#090d0b] to-[#050706] shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-between min-h-[440px] sm:min-h-[500px]">
                
                {/* Efeito de luz ambiente e halo dourado */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#d4a726]/15 blur-3xl rounded-full pointer-events-none"></div>

                {/* Header superior do Card */}
                <div className="w-full flex items-center justify-between z-10">
                  <div className="bg-black/85 backdrop-blur-md border border-[#a6861c]/40 rounded-xl px-3 py-1.5 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#d4a726] animate-ping"></div>
                    <span className="text-[11px] sm:text-xs font-semibold text-white">
                      Seg a Sex: 06h às 22h • Sáb: 09h às 15h
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#d4a726] bg-[#a6861c]/20 border border-[#a6861c]/30 px-2.5 py-1 rounded-lg">
                    <MapPin className="w-3 h-3" />
                    Benfica
                  </span>
                </div>

                {/* Centro com a Logo Oficial Dourada em Destaque */}
                <div className="my-auto py-6 flex flex-col items-center text-center z-10 group">
                  <div className="relative mb-4">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#d4a726]/30 to-[#a6861c]/10 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <img 
                      src="/assets/logo.png" 
                      alt="Logo Oficial Iron Jungle Academia" 
                      className="w-44 sm:w-52 md:w-56 h-auto object-contain drop-shadow-[0_10px_25px_rgba(212,167,38,0.35)] transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black font-heading text-white tracking-wide uppercase">
                    Iron Jungle <span className="text-[#d4a726]">Academia</span>
                  </h3>
                  <p className="text-xs text-[#f5d565] font-semibold tracking-widest uppercase mt-1">
                    Força • Constância • Biofilia
                  </p>
                </div>

                {/* Footer do Card com Endereço e Credenciais da Sede */}
                <div className="w-full bg-[#050706]/95 backdrop-blur-md border border-[#26241a] rounded-xl p-4 shadow-xl z-10">
                  <div className="text-xs font-bold text-white flex items-center gap-2 mb-1">
                    <span className="text-[#d4a726]">🦁</span> Sede Oficial no Bairro Benfica
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Rua João Gentil, 250 • A apenas 100m da Praça Gentilândia
                  </p>
                  
                  <div className="flex items-center gap-3 mt-3 pt-2.5 border-t border-[#26241a]/80 text-[10px] sm:text-[11px] text-slate-400">
                    <span className="text-[#d4a726] font-bold">★ 4.9 no Google</span>
                    <span>•</span>
                    <span>100% Climatizado</span>
                    <span>•</span>
                    <span>Treino Sem Fila</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

