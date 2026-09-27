// Todo o copy do site vem de docs/spec.md, verbatim. Não alterar texto aqui sem alterar o spec.

// URLs de inscrição (Inhire). Uma vaga por nível; todos os botões "Inscreva-se" usam esta lista.
export const INSCRICOES = [
  {
    id: "superior",
    label: "Inscreva-se · Nível Superior",
    url: "https://aldaktecnologia.inhire.app/vagas/743ae7da-4637-4b3a-b9cf-cb32f2159895/programa-de-estagio-2027-or-estagio-superior",
  },
  {
    id: "tecnico",
    label: "Inscreva-se · Nível Técnico",
    url: "https://aldaktecnologia.inhire.app/vagas/70cb48eb-aef6-4404-9167-bd4c649311b7/programa-de-estagio-aldak-2027-or-nivel-tecnico",
  },
] as const;

export type Inscricao = (typeof INSCRICOES)[number];

export type IconName = "CreditCard" | "Dumbbell" | "Bus" | "Cake";

export interface NavLink {
  label: string;
  href: string;
}

export interface IconItem {
  title: string;
  icon: IconName;
  text: string;
}

/** Item com ícone oficial da empresa (imagem em public/valores). */
export interface ImageItem {
  title: string;
  image: string;
  text: string;
}

export interface TextCard {
  title: string;
  text: string;
}

export interface Depoimento {
  nome: string;
  cargo: string;
  foto: string;
  texto: string;
}

export const site = {
  meta: {
    title: "Programa de Estágio Aldak 2027",
    description:
      "Inscrições até 25/10. Oportunidades em Salvador e São Paulo. Referência em comunicação crítica, conectividade e IoT para operações que não podem parar.",
    ogImage: "/hero/banner-1366x370.jpg",
    lang: "pt-BR",
  },

  nav: {
    links: [
      { label: "O programa", href: "#proposito" },
      { label: "Valores", href: "#valores" },
      { label: "Oportunidades", href: "#oportunidades" },
      { label: "Etapas", href: "#etapas" },
      { label: "Benefícios", href: "#beneficios" },
      { label: "Depoimentos", href: "#depoimentos" },
    ] satisfies NavLink[],
    menuOpenLabel: "Abrir menu",
    menuCloseLabel: "Fechar menu",
  },

  hero: {
    image: "/hero/banner-1366x370.jpg",
    alt: "Programa de Estágio Aldak 2027 — Inscrições até 25/10 — Oportunidades em Salvador e São Paulo",
  },

  proposito: {
    h1: "Ajudar a proteger vidas",
    // Ordem igual à do slide-proposito.png (esquerda → direita).
    fotos: [
      { src: "/proposito/pessoa-1.webp", alt: "Profissional com capacete amarelo e rádio comunicador" },
      { src: "/proposito/pessoa-2.webp", alt: "Profissional com capacete branco, rádio comunicador e notebook" },
      { src: "/proposito/pessoa-3.webp", alt: "Profissional com colete refletivo segurando capacete azul" },
      { src: "/proposito/pessoa-4.webp", alt: "Profissional com capacete laranja e tablet" },
    ],
    texto: "Esse é nosso propósito, ontem, hoje e sempre.",
  },

  quemSomos: {
    h2Linhas: ["+35 anos", "protegendo o que", "move o Brasil"],
    paragrafo:
      "Referência em comunicação crítica, conectividade e IoT para operações que não podem parar.",
    chips: [
      "Mineração",
      "Energia",
      "Óleo e gás",
      "Papel e celulose",
      "Portos e aeroportos",
      "Siderurgia",
    ],
  },

  valores: {
    h2Linhas: ["Nossos valores", "Nossa cultura"],
    itens: [
      {
        title: "Fome",
        image: "/valores/fome.png",
        text: "Somos famintos e incansáveis na busca por nossos objetivos e resultados. Não permitimos que nossas conquistas ou desafios nos paralisem, pois sempre há algo novo a ser alcançado.",
      },
      {
        title: "Verdade",
        image: "/valores/verdade.png",
        text: "Acreditamos que a base de qualquer relacionamento é a transparência, a confiança e a gentileza. Por isso, não toleramos mentiras.",
      },
      {
        title: "Humildade Intelectual",
        image: "/valores/humildade-intelectual.png",
        text: "Acreditamos que há algo a aprender todos os dias e com todas as pessoas. Estamos sempre abertos a pensamentos diversos e dispostos a mudar de opinião.",
      },
      {
        title: "Comprometimento",
        image: "/valores/comprometimento.png",
        text: "Não desistimos. Trabalhamos com determinação e consistência para honrar nossos compromissos.",
      },
      {
        title: "Resolutividade",
        image: "/valores/resolutividade.png",
        text: "Fazemos o que precisa ser feito de forma eficiente e eficaz. Encaramos nossos erros e problemas como oportunidades de melhoria e crescimento.",
      },
      {
        title: "Jogamos juntos",
        image: "/valores/jogamos-juntos.webp",
        text: "Colaboramos uns com os outros, compartilhamos o sucesso e nos apoiamos no dia a dia.",
      },
    ] satisfies ImageItem[],
  },

  oEstagio: {
    tagline:
      "Aqui, a tecnologia está a serviço de algo maior: ajudar a proteger vidas.",
    h2: "O estágio que te leva além!",
    cards: [
      {
        title: "Protagonismo desde o 1º dia",
        text: "Aqui, suas ideias têm espaço para acontecer. Você participa de projetos reais, assume responsabilidades desde o início e contribui diretamente para soluções que impactam clientes e operações em todo o país.",
      },
      {
        title: "Impacto e Solidez",
        text: "Crescemos com a energia de quem está sempre construindo algo novo e com a segurança de quem acumula mais de 35 anos de experiência. Aqui, você participa de projetos relevantes em uma empresa referência em comunicação crítica.",
      },
      {
        title: "Aprendizado que acelera sua carreira",
        text: "Desenvolva habilidades técnicas e comportamentais ao lado de profissionais experientes, participando de projetos multidisciplinares que conectam tecnologia, negócios e operações. Aqui, o aprendizado acontece todos os dias.",
      },
    ] satisfies TextCard[],
  },

  oportunidades: {
    h2Linhas: ["Vamos descobrir juntos as", "oportunidades ideais"],
    cards: [
      {
        title: "Tecnologia",
        text: "Para quem deseja atuar com infraestrutura, sistemas, produtos digitais e monitoramento de ambientes críticos.",
      },
      {
        title: "Negócios & Pessoas",
        text: "Para quem deseja desenvolver talentos, fortalecer a cultura organizacional e contribuir para o crescimento sustentável da empresa.",
      },
      {
        title: "Engenharia",
        text: "Para quem quer projetar, dimensionar e implementar soluções que conectam pessoas, operações e tecnologias.",
      },
      {
        title: "Operações Técnicas",
        text: "Para quem gosta de atuar diretamente com equipamentos, logística, manutenção e qualidade, contribuindo para o funcionamento das operações.",
      },
    ] satisfies TextCard[],
  },

  requisitos: {
    h3: "Requisitos:",
    colunaEsquerda: [
      "Cursando bacharelado ou tecnólogo para vagas de nível superior",
      "Cursando curso técnico para vagas de nível técnico",
    ],
    colunaDireita: [
      "Formação prevista a partir de 2028.1",
      "Disponibilidade de 6h por dia",
      "Presencial em São Paulo ou Salvador",
    ],
  },

  etapas: {
    h2: "Etapas do Processo seletivo",
    itens: [
      "Inscrição",
      "Teste Whatsapp",
      "Bate-Papo RH",
      "Imersão Presencial",
      "Onboarding e Boas vindas",
    ],
  },

  beneficios: {
    h2: "Benefícios",
    itens: [
      {
        title: "Auxílio Refeição",
        icon: "CreditCard",
        text: "em um cartão de crédito, para proporcionar maior flexibilidade para seus gastos com alimentação e outras necessidades.",
      },
      {
        title: "Acesso ao app Totalpass",
        icon: "Dumbbell",
        text: "para atividades físicas e diversas ações de saúde e bem estar (possível colocar dependentes!).",
      },
      {
        title: "Auxílio Transporte",
        icon: "Bus",
        text: "valor integral do transporte público e integrações no deslocamento casa-estágio.",
      },
      {
        title: "Dayoff Aniversário",
        icon: "Cake",
        text: "No mês do seu aniversário para escolher quando comemorar.",
      },
    ] satisfies IconItem[],
  },

  depoimentos: {
    h2: "Depoimentos",
    itens: [
      {
        nome: "Hyago Morais",
        cargo: "Técnico I",
        foto: "/depoimentos/hyago.jpg",
        texto:
          "Estagiar na Aldak foi uma experiência muito enriquecedora. Durante os 15 meses, pude desenvolver meus conhecimentos na prática, aprender novas ferramentas e processos, além de evoluir tanto profissionalmente quanto pessoalmente. Todo esse aprendizado contribuiu para minha efetivação, e hoje tenho a oportunidade de continuar crescendo, enfrentando novos desafios e construindo minha carreira junto à empresa. Minha evolução tem sido muito positiva. Aprendi bastante na prática, desenvolvi novos conhecimentos técnicos e também conquistei mais confiança, responsabilidade e autonomia no trabalho.",
      },
      {
        nome: "Evelyn Cardoso",
        cargo: "Assistente Administrativo",
        foto: "/depoimentos/evelyn.jpg",
        texto:
          "Ter sido estagiária aqui foi uma experiencia bastante enriquecedora, de muito desenvolvimento e aprendizado. Hoje, ter sido contratada me faz todos os dias estar tendo a oportunidade de contribuir e crescer junto com a equipe. O que mais me motiva é a oportunidade de enfrentar novos desafios, aprender continuamente e trabalhar com pessoas que estão sempre dispostas a te acolher, compartilhar conhecimento e construir soluções em conjunto. Minha trajetória tem sido de constante evolução. Entrei como estagiária e, ao longo do tempo, desenvolvi competências técnicas, ganhei mais autonomia e amadureci profissionalmente. Também fortaleci habilidades como comunicação, organização e resolução de problemas.",
      },
      {
        nome: "Islã Silva",
        cargo: "Gerente de Operações",
        foto: "/depoimentos/isla.jpg",
        texto:
          "Minha trajetória na Aldak começou como estagiário no laboratório de eletrônica, passando pelo P&D e, depois, retornando ao laboratório como supervisor, coordenador e, posteriormente, assumindo a gerência da área de Operações. Desde o início, o acolhimento e as oportunidades que recebi me fizeram acreditar que estava começando um ciclo de crescimento profissional e pessoal. Hoje, tenho muito orgulho dessa trajetória e não tenho dúvidas de que a Aldak é uma empresa com um ambiente fértil para desenvolver talentos, dar oportunidades e permitir que as pessoas construam suas próprias histórias.",
      },
      {
        nome: "Camila Ferreira",
        cargo: "Gerente de Contas",
        foto: "/depoimentos/camila.jpg",
        texto:
          "Estagiar na Aldak foi uma oportunidade de extremo aprendizado e desenvolvimento. Desde o início, tive ao meu lado pessoas dispostas a ensinar, compartilhar experiências e me orientar, o que me permitiu assumir desafios cada vez maiores e mais importantes para a empresa, sempre com acompanhamento e direcionamento. A cada nova etapa, novos desafios e responsabilidades me fizeram crescer, acompanhando também o crescimento da própria Aldak. Essa trajetória tem me transformado continuamente e contribuído para a profissional que sou hoje.",
      },
    ] satisfies Depoimento[],
  },

  ctaFinal: {
    h2: "Inscrições até 25/10",
  },

  footer: {
    texto: "Programa de Estágio Aldak 2027",
    aldakLogoAlt: "ALDAK Tecnologia",
    programaLogoAlt: "Programa de Estágio Aldak 2027",
  },
} as const;

export type Site = typeof site;
