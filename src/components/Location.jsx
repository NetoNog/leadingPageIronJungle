import React from 'react'
import { MapPin, Clock, MessageCircle, Instagram, ExternalLink, Navigation } from 'lucide-react'

export default function Location() {
  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050706]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a6861c]/15 border border-[#a6861c]/30 text-[#f5d565] text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            Localização & Contato
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Fale conosco ou <span className="text-gradient-gold">venha nos visitar</span>.
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            No coração do Benfica, a apenas 100 metros da Praça da Gentilândia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Informações de Contato Oficiais */}
          <div className="lg:col-span-5">
            <div className="space-y-6 mb-8">
              
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0e1210] border border-[#26241a] border-gold-hover">
                <div className="w-12 h-12 rounded-xl bg-[#a6861c]/15 border border-[#a6861c]/40 flex items-center justify-center text-[#d4a726] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Endereço Oficial</h4>
                  <p className="text-slate-300 text-sm mt-0.5">Rua João Gentil, 250 - Benfica</p>
                  <p className="text-slate-400 text-xs">Fortaleza - CE, CEP 60020-100</p>
                  <p className="text-[11px] text-[#d4a726] font-semibold mt-1">A 100m da Praça Gentilândia</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0e1210] border border-[#26241a] border-gold-hover">
                <div className="w-12 h-12 rounded-xl bg-[#a6861c]/15 border border-[#a6861c]/40 flex items-center justify-center text-[#d4a726] flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Horário de Funcionamento</h4>
                  <p className="text-slate-300 text-sm mt-0.5"><strong>Segunda a Sexta:</strong> 06:00 às 22:00</p>
                  <p className="text-slate-300 text-sm"><strong>Sábado:</strong> 09:00 às 15:00</p>
                  <p className="text-slate-500 text-xs mt-0.5">Domingos e feriados fechado para descanso</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0e1210] border border-[#26241a] border-gold-hover">
                <div className="w-12 h-12 rounded-xl bg-[#a6861c]/15 border border-[#a6861c]/40 flex items-center justify-center text-[#d4a726] flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">WhatsApp Oficial</h4>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=5585981749877&text&type=phone_number&app_absent=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-200 text-sm hover:text-[#d4a726] font-bold transition-colors inline-block mt-0.5"
                  >
                    (85) 98174-9877
                  </a>
                  <p className="text-xs text-[#d4a726] font-semibold mt-0.5">Resposta rápida de salão</p>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5585981749877&text=Olá!%20Como%20faço%20para%20conhecer%20a%20Iron%20Jungle%20hoje?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black font-extrabold text-sm shadow-gold transition-all flex items-center gap-2 hover:brightness-110"
              >
                <MessageCircle className="w-4 h-4" />
                Falar Conosco no WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/ironjungleacademia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#0e1210] border border-[#26241a] hover:border-[#d4a726] text-slate-300 hover:text-white font-bold text-sm transition-all flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                @ironjungleacademia
              </a>
            </div>

          </div>

          {/* Mapa Integrado Oficial */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#a6861c]/40 shadow-2xl bg-[#0e1210] h-[450px]">
              <iframe 
                title="Localização Oficial da Iron Jungle no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3217698143635!2d-38.545359!3d-3.744066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748f5c81b07eb%3A0x6a2bd3f17fc60b58!2sR.%20Jo%C3%A3o%20Gentil%2C%20250%20-%20Benfica%2C%20Fortaleza%20-%20CE%2C%2060020-100!5e0!3m2!1spt-BR!2sbr!4v1616179338219!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#0e1210]/95 backdrop-blur-md border border-[#a6861c]/40 p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 text-[#d4a726] font-bold text-xs mb-1">
                  <MapPin className="w-3.5 h-3.5" /> Iron Jungle Academia
                </div>
                <p className="text-xs text-white font-semibold">Rua João Gentil, 250 - Benfica</p>
                <p className="text-[11px] text-slate-400 mt-0.5">A 100m da Praça Gentilândia</p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+João+Gentil,+250+-+Benfica,+Fortaleza+-+CE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-black bg-[#d4a726] hover:bg-[#f5d565] px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" /> Traçar Rota GPS
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
