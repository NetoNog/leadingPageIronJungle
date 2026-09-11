# 🦁 Iron Jungle Academia — Landing Page Oficial

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0.9-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Produção-brightgreen?style=for-the-badge)

Uma landing page moderna, responsiva e de alta conversão desenvolvida para a **Iron Jungle Academia**, localizada estrategicamente no bairro Benfica (Fortaleza - CE), a apenas 100 metros da icônica Praça da Gentilândia.

---

## 📌 Sumário
- [Visão Geral](#-visão-geral)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades e Seções](#-funcionalidades-e-seções)
- [Identidade Visual e Design](#-identidade-visual-e-design)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Rodar Localmente](#-como-rodar-localmente)
- [Deploy na Vercel](#-deploy-na-vercel)
- [Otimizações e SEO](#-otimizações-e-seo)
- [Licença e Créditos](#-licença-e-créditos)

---

## 🌟 Visão Geral

A **Iron Jungle Academia** une o conceito de **design biofílico** (integração entre natureza, iluminação aconchegante e arquitetura rústico-industrial) com equipamentos de ponta para musculação e condicionamento físico. 

O site foi projetado com foco em:
1. **Alta Taxa de Conversão (CRO)**: CTAs estratégicos direcionados ao checkout oficial da **Tecnofit** e atendimento via WhatsApp.
2. **Autoridade Local**: Foco na localização estratégica próxima à UFC e Gentilândia, com avaliações reais e depoimentos de alunos.
3. **Acolhimento e Saúde Integral**: Espaço tanto para quem busca hipertrofia de alto rendimento quanto para quem precisa de alívio de dores articulares e cuidados para a terceira idade.
4. **Experiência Visual Imersiva**: Tema dark escuro e elegante com detalhes em ouro escovado, vídeos demonstrativos e galeria interativa com lightbox.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com a stack moderna do ecossistema React:

| Tecnologia | Versão | Função |
|---|---|---|
| **[React](https://react.dev/)** | `18.3.1` | Biblioteca base para construção da interface orientada a componentes funcionais |
| **[Vite](https://vitejs.dev/)** | `6.2.0` | Bundler e build tool ultraveloz com Hot Module Replacement (HMR) instantâneo |
| **[Tailwind CSS](https://tailwindcss.com/)** | `4.0.9` | Engine moderna de utilitários CSS e nova arquitetura com diretiva `@theme` |
| **[@tailwindcss/vite](https://tailwindcss.com/docs/vite)** | `4.0.9` | Plugin oficial de integração direta do Tailwind v4 com o pipeline do Vite |
| **[Lucide React](https://lucide.dev/)** | `0.475.0` | Conjunto de ícones vetoriais modernos, limpos e otimizados |
| **[Google Fonts](https://fonts.google.com/)** | — | Fontes de alta legibilidade: *Montserrat* (títulos/destaque) e *Plus Jakarta Sans* |
| **[Vercel](https://vercel.com/)** | — | Plataforma de edge deployment com CI/CD integrado ao GitHub |

---

## 🚀 Funcionalidades e Seções

A página foi arquitetada em componentes modulares e reutilizáveis:

1. **`AnnouncementBar` (Barra Superior de Avisos)**:
   - Notificações de plantões, horários de feriados e promoções vigentes.
2. **`Navbar` (Menu de Navegação Inteligente)**:
   - Efeito de transparência *glassmorphism* com blur no scroll.
   - Navegação suave por âncoras (`#sobre`, `#estrutura`, `#equipe`, `#resultados`, `#planos`, `#contato`).
   - Menu hambúrguer responsivo para dispositivos móveis.
3. **`Hero Section` (Apresentação Principal)**:
   - Headline magnética focada na proposta de valor da marca.
   - Imagens de alto impacto da academia e selo de proximidade ("100m da Gentilândia").
   - Botões de ação rápida para matrícula online e WhatsApp.
4. **`About` (Sobre a Iron Jungle)**:
   - Narrativa da academia, metodologia de treino humanizada e vídeo institucional integrado.
5. **`Structure` (Estrutura e Biofilia)**:
   - Destaque para o ambiente 100% climatizado, iluminação acolhedora e o mural artístico exclusivo assinado por **Zé Victor**.
   - Galeria com fotos da sala de musculação e aparelhos.
6. **`Team` (Nossa Equipe de Professores)**:
   - Apresentação do time de instrutores no salão, reforçando o acompanhamento técnico para iniciantes, reabilitação física e terceira idade.
7. **`Results` & `Testimonials` (Resultados & Depoimentos)**:
   - Casos reais de evolução física de alunos.
   - **`Lightbox`**: Visualizador modal em tela cheia para ampliar fotos e antes/depois com toque ou clique.
8. **`Pricing` (Tabela de Planos)**:
   - Comparativo claro de planos (Mensal, Trimestral, Semestral, Anual).
   - Destaque para o plano mais vantajoso com selo de recomendação.
   - Links diretos integrados ao sistema de pagamento da **Tecnofit**.
9. **`WellhubBadge` (Convênio Wellhub / Gympass)**:
   - Seção dedicada para empresas e colaboradores que utilizam o benefício corporativo.
10. **`BmiCalculator` (Calculadora Interativa de IMC + Turno)**:
    - O usuário informa peso e altura para calcular seu Índice de Massa Corporal.
    - Seleção do turno de treino preferido (Manhã, Tarde ou Noite).
    - Exibe a classificação personalizada com botão interativo que monta uma mensagem sob medida para enviar ao WhatsApp da equipe técnica.
11. **`InstagramFeed` (Galeria Social)**:
    - Vitrine com fotos e reels do dia a dia da academia com link direto para o perfil oficial `@ironjungleacademia`.
12. **`Location` (Localização e Horários)**:
    - Informações de horário comercial detalhadas (segunda a sábado).
    - Mapa oficial interativo do Google Maps incorporado com botão para traçar rotas via Waze/Google Maps.
13. **`Faq` (Perguntas Frequentes)**:
    - Acordeão expansível com dúvidas sobre cancelamento, formas de pagamento, roupas recomendadas e suporte de instrutores.
14. **`FloatingWhatsApp` (Botão Flutuante)**:
    - Botão fixo no canto inferior direito com pulso luminoso e link direto com mensagem de boas-vindas.

---

## 🎨 Identidade Visual e Design

A interface foi concebida para transmitir **robustez, sofisticação e acolhimento**, fugindo do padrão genérico de academias tradicionais:

- **Paleta de Cores Oficial**:
  - `Preto Profundo` (`#050706`): Fundo principal que proporciona contraste e conforto visual.
  - `Grafite Escuro` (`#0e1210` / `#161c19`): Superfície dos cards e componentes.
  - `Dourado / Ouro Real` (`#d4a726` / `#f5d565` / `#a6861c`): Detalhes de botões, gradientes de texto, bordas metálicas escovadas e sombras brilhantes (*gold glow*).
- **Tipografia**:
  - `Montserrat`: Títulos marcantes, pesos 600 a 900, transmitindo força e energia.
  - `Plus Jakarta Sans`: Textos corridos e dados analíticos, garantindo excelente leiturabilidade em telas de qualquer tamanho.
- **Efeitos Especiais**:
  - Padrão de grade sutil no background (`bg-grid-pattern`).
  - Bordas com gradiente metálico e hover 3D suave.

---

## 📁 Estrutura do Projeto

```text
iron-jungle-leadingpage/
├── public/
│   └── assets/              # Imagens de alta resolução, logos e vídeo mp4
├── src/
│   ├── components/          # Componentes modulares da landing page
│   │   ├── ui/
│   │   │   └── Lightbox.jsx # Modal visualizador de fotos em tela cheia
│   │   ├── About.jsx
│   │   ├── AnnouncementBar.jsx
│   │   ├── BmiCalculator.jsx
│   │   ├── Comparison.jsx
│   │   ├── Differentials.jsx
│   │   ├── Faq.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── InstagramFeed.jsx
│   │   ├── Location.jsx
│   │   ├── Modalities.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   ├── Results.jsx
│   │   ├── Structure.jsx
│   │   ├── Team.jsx
│   │   ├── Testimonials.jsx
│   │   └── WellhubBadge.jsx
│   ├── data/
│   │   └── gymData.js       # Constantes, planos, links do Tecnofit e horários
│   ├── App.jsx              # Composição principal das seções da página
│   ├── index.css            # Configuração do Tailwind v4 (@theme e utilitários)
│   └── main.jsx             # Ponto de entrada do React DOM
├── .gitignore
├── index.html               # Documento HTML principal, meta tags e Schema.org
├── package.json             # Dependências e scripts do ecossistema Node
├── vite.config.js           # Configurações do Vite e plugins do Tailwind/React
└── README.md                # Documentação técnica do projeto
```

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão `18.0.0` ou superior)
- Gerenciador de pacotes `npm`, `yarn` ou `pnpm`

### Instalação

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/NetoNog/leadingPageIronJungle.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd leadingPageIronJungle
   ```

3. Instale todas as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador no endereço indicado (geralmente [http://localhost:5173](http://localhost:5173)).

### Comandos Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor local de desenvolvimento com recarregamento instantâneo |
| `npm run build` | Compila os arquivos para produção na pasta `dist/` com minificação e chunks otimizados |
| `npm run preview` | Executa um servidor local servindo a pasta `dist/` para testar o build final |

---

## ☁️ Deploy na Vercel

O projeto está configurado para deploy contínuo (*Continuous Deployment*) na Vercel:

1. Cada `push` enviado para a branch `main` dispara um build automático.
2. Configurações de Build na Vercel:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` ou `vite build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

---

## 🔍 Otimizações e SEO

A página segue as melhores práticas de indexação e performance para mecanismos de busca (Google / Bing):

- **Local SEO Schema.org (JSON-LD)**: Configuração estruturada da entidade `ExerciseGym`, especificando coordenadas geográficas (`-3.744271, -38.5387053`), horários diários, faixa de preços, telefone e links de redes sociais.
- **Open Graph Protocol**: Imagem de compartilhamento (`og:image`), título e descrição customizados para pré-visualização no WhatsApp, Facebook, LinkedIn e Twitter/X.
- **Performance de Carregamento**:
  - Imagens estáticas servidas pela pasta `public/` com tags de dimensão adequadas.
  - Carregamento de fontes externas com `preconnect` para o Google Fonts.
  - Scripts carregados como módulos nativos ES (`type="module"`).

---

## 📄 Licença e Créditos

Desenvolvido para **Iron Jungle Academia**.  
Todos os direitos reservados sobre a marca, fotos, logotipos e identidade visual da academia.
