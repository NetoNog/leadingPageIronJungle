/**
 * Camada de Dados Centralizada da Iron Jungle Academia
 * Todos os dados de contato, planos, fotos reais e FAQs centralizados.
 */

export const GYM_CONFIG = {
  name: 'Iron Jungle Academia',
  tagline: 'O treino que você respeita no coração do Benfica',
  headline: 'Aqui você constrói sua melhor versão. Treine hoje para viver melhor amanhã!',
  subheadline: 'Bem-vindo à Iron Jungle, a melhor academia do bairro Benfica!',
  phone: '(85) 98174-9877',
  phoneRaw: '5585981749877',
  whatsappUrl: 'https://api.whatsapp.com/send/?phone=5585981749877&text&type=phone_number&app_absent=0',
  instagram: 'https://www.instagram.com/ironjungleacademia/',
  instagramHandle: '@ironjungleacademia',
  address: {
    street: 'Rua João Gentil, 250',
    neighborhood: 'Benfica',
    city: 'Fortaleza',
    state: 'CE',
    zip: '60020-100',
    reference: 'A apenas 100 metros da Praça Gentilândia',
    geo: {
      lat: -3.744271,
      lng: -38.5387053
    }
  },
  hours: {
    weekdays: '06:00 às 22:00',
    saturday: '09:00 às 15:00',
    sunday: 'Fechado para descanso'
  },
  plans: [
    {
      id: 'anual-parcelado',
      name: 'ANUAL PARCELADO',
      tag: 'Maior Economia Anual',
      price: '90',
      period: '/mês',
      cents: '',
      desc: 'Plano anual com pagamento único parcelado em 12x no cartão de crédito, cobrando o valor total no momento da compra.',
      features: [
        'Acesso total e ilimitado no Benfica',
        'Acesso ao aplicativo oficial exclusivo',
        'Acompanhamento de professores no salão',
        'Participação no ranking mensal com brindes'
      ],
      checkoutUrl: 'https://app.tecnofit.com.br/ng/online-sale/MTE3NTU1/checkout/NzI0ODE5/forms',
      isPopular: false
    },
    {
      id: 'anual-recorrente',
      name: 'ANUAL RECORRENTE',
      tag: '⭐ Mais Escolhido no Benfica',
      price: '99',
      cents: ',90',
      period: '/mês',
      desc: 'Plano anual com fidelidade de 12 meses e cobrança automática de R$99,90 por mês no cartão de crédito.',
      features: [
        'Não consome o limite total do cartão de crédito',
        'Cobrança automática mensal sem boletos',
        'Acesso completo à musculação, esteiras e pesos',
        'App exclusivo com treinos personalizados'
      ],
      checkoutUrl: 'https://app.tecnofit.com.br/ng/online-sale/MTE3NTU1/checkout/OTMwNTky/forms',
      isPopular: true
    }
  ],
  gallery: [
    {
      src: '/assets/estrutura2.JPG',
      title: 'Maquinário de Biomecânica Precisa',
      desc: 'Área com equipamentos robustos, anilhas olímpicas e ambiente 100% climatizado no Benfica.',
      category: 'Estrutura'
    },
    {
      src: '/assets/background.jpg',
      title: 'Maquinário de Força & Ergometria',
      desc: 'Ambiente climatizado com bikes, esteiras e aparelhos calibrados de musculação.',
      category: 'Estrutura'
    },
    {
      src: '/assets/estrutura1.jpg',
      title: 'Identidade Biofílica & Mural do Leão',
      desc: 'Grafite do artista cearense Zé Victor integrando plantas naturais e estruturas metálicas industriais.',
      category: 'Arte & Ambiente'
    },
    {
      src: '/assets/equipe2.PNG',
      title: 'Professores Qualificados & Presentes',
      desc: 'Equipe especializada com foco em execução correta, hipertrofia e alívio de dores posturais.',
      category: 'Equipe'
    },
    {
      src: '/assets/equipe1.jpg',
      title: 'Acolhimento desde o Primeiro Dia',
      desc: 'Ambiente onde o aluno iniciante recebe atenção total e aprende a treinar com segurança.',
      category: 'Equipe'
    },
    {
      src: '/assets/equipe3.jpg',
      title: 'Acompanhamento Humanizado em Cada Série',
      desc: 'Treinadores presentes que orientam postura, cargas e te motivam diariamente.',
      category: 'Equipe'
    }
  ]
}
