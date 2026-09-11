import React from 'react'
import { Star, Award, TrendingUp, CheckCircle } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      initials: 'CS',
      name: 'Camila Silveira',
      role: 'Servidora Pública • Aluna há 6 meses',
      quote: 'Passei por 2 academias grandes aqui perto da 13 de Maio e me sentia invisível. Na Iron Jungle o atendimento é outro patamar. Os instrutores realmente olham sua execução, ajustam o banco e te puxam para evoluir. É acolhedora de verdade.',
    },
    {
      initials: 'RT',
      name: 'Rodrigo Tavares',
      role: 'Praticante de Força & Powerlifting',
      quote: 'Para quem curte treino de força, não existe lugar melhor em Fortaleza. Anilhas olímpicas de verdade, barras de alta aderência e o pessoal respeita quem treina pesado. Dá gosto de treinar aqui todo fim de tarde.',
    },
    {
      initials: 'FA',
      name: 'Felipe Albuquerque',
      role: 'Estudante UFC Benfica • Aluno há 8 meses',
      quote: 'Estudo na UFC e a localização na João Gentil é perfeita. Saio da aula e vou direto pro treino. O clima é super amigável, ninguém fica te olhando com julgamento. O custo-benefício dos planos anuais é imbatível!',
    },
  ]

  const realResults = [
    {
      img: '/assets/res1.JPEG',
      title: 'Recomposição Corporal',
      caption: 'Alunos com acompanhamento postural e plano de constância no Benfica.',
    },
    {
      img: '/assets/res2.jpg',
      title: 'Ganho de Densidade',
      caption: 'Progresso constante de hipertrofia com orientação de cargas.',
    },
    {
      img: '/assets/res4.JPG',
      title: 'Evolução e Disciplina',
      caption: 'Construção de hábitos diários e fortalecimento articular seguro.',
    },
    {
      img: '/assets/res5.jpg',
      title: 'Transformação Real',
      caption: 'Resultados duradouros sem fórmulas mágicas, com ferro de verdade.',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050706]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4a726]">Quem treina na selva recomenda</span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white mt-2">
            Histórias e resultados reais no Benfica.
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Veja a opinião e a transformação de quem encontrou na Iron Jungle o ambiente ideal para não desistir dos treinos.
          </p>
        </div>

        {/* Depoimentos em Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-[#0e1210] border border-[#26241a] rounded-2xl p-7 flex flex-col justify-between border-gold-hover"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#26241a]">
                <div className="w-10 h-10 rounded-full bg-[#a6861c]/20 text-[#d4a726] font-bold flex items-center justify-center text-sm border border-[#a6861c]/30">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Destaque de Resultados Reais com Fotos */}
        <div className="bg-[#0e1210] border border-[#a6861c]/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-2 text-[#d4a726] text-xs font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="w-4 h-4" />
            Galeria de Resultados & Comunidade
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-white mb-6">
            O resultado de quem treina com método e acompanhamento
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {realResults.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#0e1210] border border-[#26241a] rounded-2xl overflow-hidden group hover:border-[#d4a726]/50 transition-all flex flex-col justify-between"
              >
                {/* Área da Foto 100% Completa e sem cortes */}
                <div className="h-48 sm:h-52 overflow-hidden relative bg-[#050706] flex items-center justify-center p-2.5">
                  <img 
                    src={item.img} 
                    alt="" 
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-110 pointer-events-none"
                  />
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 shadow-md"
                  />
                </div>

                {/* Textos da foto posicionados abaixo, sem cobrir nenhuma parte da imagem */}
                <div className="p-4 bg-[#0a0e0c] border-t border-[#1c221e] flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#d4a726] to-[#a6861c] text-black font-black text-[10px] uppercase mb-2 shadow-sm">
                      <Award className="w-3 h-3 text-black" /> Caso Real
                    </span>
                    <h4 className="text-sm font-bold text-white leading-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:flex items-center justify-between gap-4 border-t border-[#26241a] pt-6">
            <div className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#d4a726]" />
              <span>Aplicativo exclusivo com treino guiado e ranking mensal de frequência.</span>
            </div>
            <a 
              href="https://wa.me/5585981749877?text=Olá!%20Gostaria%20de%20começar%20minha%20transformação%20na%20Iron%20Jungle." 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4a726] to-[#a6861c] hover:from-[#f5d565] hover:to-[#d4a726] text-black font-bold text-xs shadow-gold transition-all"
            >
              Começar Minha Transformação
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
