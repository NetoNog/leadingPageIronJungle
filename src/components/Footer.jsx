import React from 'react'
import { Instagram, MessageCircle, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#26241a] py-14 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Coluna 1 & 2: Logo Oficial e Apresentação */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/assets/logo-nome-horizontal.png" 
                alt="Iron Jungle Academia" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              A melhor academia do bairro Benfica. Musculação de alto nível, equipamentos de alta precisão biomecânica e acompanhamento humanizado a 100m da Praça Gentilândia.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/ironjungleacademia/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram da Iron Jungle" 
                className="w-9 h-9 rounded-lg bg-[#0e1210] border border-[#26241a] flex items-center justify-center text-slate-300 hover:text-[#d4a726] hover:border-[#d4a726] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5585981749877&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp da Iron Jungle" 
                className="w-9 h-9 rounded-lg bg-[#0e1210] border border-[#26241a] flex items-center justify-center text-slate-300 hover:text-[#d4a726] hover:border-[#d4a726] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="https://www.google.com/maps/place/Iron+Jungle+Academia/@-3.744271,-38.5387053,18z" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Google Maps da Iron Jungle" 
                className="w-9 h-9 rounded-lg bg-[#0e1210] border border-[#26241a] flex items-center justify-center text-slate-300 hover:text-[#d4a726] hover:border-[#d4a726] transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 3: Links do Site Oficial */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a726] mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#sobre" className="hover:text-[#d4a726] transition-colors">Sobre Nós</a></li>
              <li><a href="#estrutura" className="hover:text-[#d4a726] transition-colors">Estrutura & Fotos</a></li>
              <li><a href="#equipe" className="hover:text-[#d4a726] transition-colors">Nossa Equipe</a></li>
              <li><a href="#resultados" className="hover:text-[#d4a726] transition-colors">Seus Resultados</a></li>
              <li><a href="#planos" className="hover:text-[#d4a726] transition-colors">Planos & Preços</a></li>
              <li><a href="#contato" className="hover:text-[#d4a726] transition-colors">Contato & Mapa</a></li>
            </ul>
          </div>

          {/* Coluna 4: Destaques */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a726] mb-4">Diferenciais</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#estrutura" className="hover:text-[#d4a726] transition-colors">Ambiente Climatizado</a></li>
              <li><a href="#estrutura" className="hover:text-[#d4a726] transition-colors">Design Biofílico</a></li>
              <li><a href="#equipe" className="hover:text-[#d4a726] transition-colors">Alívio de Dores Articulares</a></li>
              <li><a href="#resultados" className="hover:text-[#d4a726] transition-colors">App Exclusivo de Treinos</a></li>
              <li><a href="#planos" className="hover:text-[#d4a726] transition-colors">Planos Anuais Tecnofit</a></li>
            </ul>
          </div>

          {/* Coluna 5: Localização e Horário */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4a726] mb-4">Atendimento</h4>
            <div className="text-xs text-slate-400 space-y-2">
              <p><strong>Endereço:</strong> Rua João Gentil, 250 - Benfica, Fortaleza - CE</p>
              <p><strong>WhatsApp:</strong> (85) 98174-9877</p>
              <p><strong>Segunda a Sexta:</strong> 06h às 22h</p>
              <p><strong>Sábado:</strong> 09h às 15h</p>
            </div>
          </div>

        </div>

        {/* Linha Final */}
        <div className="pt-8 border-t border-[#26241a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Iron Jungle Academia - Todos os direitos reservados</p>
          <p className="flex items-center gap-1 text-[#d4a726]">
            Remasterizado com as informações oficiais • Benfica, Fortaleza
          </p>
        </div>

      </div>
    </footer>
  )
}
