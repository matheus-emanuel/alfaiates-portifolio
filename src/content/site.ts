/**
 * Fonte única da copy e dos links da landing. Trocar texto aqui, nunca dentro
 * dos componentes.
 *
 * TODO(cliente): os campos marcados com PENDENTE precisam da URL real antes de
 * publicar. Enquanto estiverem assim, o link não é renderizado como âncora
 * clicável (ver `components/ui/ExternalLink.tsx`).
 */

export const PENDENTE = "" as const;

export const site = {
  nome: "Alfaiates Sistemas",
  url: "https://alfaiatessistemas.com.br", // TODO(cliente): domínio definitivo
  cidade: "São Paulo, SP",
  tagline: "Sistemas e sites sob medida para o seu negócio",
  descricao:
    "A Alfaiates Sistemas cria sites e sistemas sob medida para pequenos negócios: CRM, PDV, agenda, estoque e painel do dono. Orçamento fechado antes de começar."
};

export const links = {
  /** (88) 99689-7590, com a mensagem já escrita pra quem chega pelo site. */
  whatsapp: "https://wa.me/5588996897590?text=" + encodeURIComponent("Oi! Vim pelo site. Quero um sistema pro meu negócio."),
  /** TODO(cliente): perfil do Instagram. */
  instagram: PENDENTE
};

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como" },
  { label: "Trabalhos", href: "#portfolio" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Perguntas", href: "#faq" }
];

export const hero = {
  badge: "Sistemas sob medida para o seu negócio",
  titulo: "Feito do jeito certo, no seu formato, pro seu problema",
  subtitulo:
    "A gente conversa, entende como você trabalha hoje e monta o sistema em cima disso. Sem adaptar seu negócio a um software genérico.",
  ctaPrimario: "Quero um sistema feito pro meu negócio",
  ctaWhatsapp: "Falar agora no WhatsApp"
};

/** Mock do painel no hero: agenda do dia e caixa. Dados de exemplo. */
export const agendaMock = {
  titulo: "Agenda de hoje",
  relogio: "CAIXA 03 · 14:22",
  linhas: [
    { hora: "09:00", nome: "Ana Prado", servico: "Corte + barba", status: "PIX OK" },
    { hora: "10:30", nome: "Marcos Lima", servico: "Barba", status: "PIX OK" },
    { hora: "11:15", nome: "Julia Reis", servico: "Corte", status: "A RECEBER" },
    { hora: "13:00", nome: "Caio Souza", servico: "Corte + barba", status: "A RECEBER" }
  ],
  rodapeLabel: "Recebido hoje",
  rodapeValor: "R$ 1.240"
};

export const pain = {
  titulo: "Você já tentou resolver com",
  palavras: ["Planilha", "Caderno", "Sistema caro"],
  itens: [
    "Planilha que só você entende, e que trava quando o movimento aumenta.",
    "Sistema pronto com trinta telas, e você usa duas.",
    "Cliente que sumiu e ninguém percebeu.",
    "Fim do mês sem saber quanto entrou de verdade."
  ]
};

export const diferenciais = {
  eyebrow: "Diferencial",
  titulo: "Seu negócio é único, então seu sistema também deve ser",
  itens: [
    {
      icone: "search",
      tom: "malva",
      titulo: "Entender antes de construir",
      beneficio: "Primeiro a gente entende sua rotina. O sistema vem depois.",
      bullets: ["Visita ou call de diagnóstico", "Mapa do que você faz hoje"]
    },
    {
      icone: "puzzle",
      tom: "rosa",
      titulo: "Construído por partes",
      beneficio: "Você pede o que precisa agora e acrescenta depois.",
      bullets: ["Comece por um módulo", "Cresce sem refazer tudo"]
    },
    {
      icone: "hand-heart",
      tom: "malva",
      titulo: "Gente que atende",
      beneficio: "Quem constrói é quem responde quando dá problema.",
      bullets: ["Suporte direto no WhatsApp", "Treino do time incluído"]
    }
  ]
} as const;

export const servicos = {
  eyebrow: "Serviços",
  titulo: "Peças que você pode pedir separadas",
  intro: "Cada módulo resolve uma dor específica. Pode começar por um e somar depois.",
  itens: [
    {
      icone: "users",
      titulo: "CRM sob medida",
      beneficio: "Você sabe quem é cliente, quem sumiu e quem vale ligar hoje.",
      bullets: ["Ficha do cliente", "Histórico de compra", "Lembrete de retorno"]
    },
    {
      icone: "credit-card",
      titulo: "PDV e caixa",
      beneficio: "Venda registrada na hora, fechamento sem conferir papel.",
      bullets: ["Pix e cartão no mesmo lugar", "Fechamento de caixa", "Relatório do dia"]
    },
    {
      icone: "calendar-check",
      titulo: "Agenda e lembretes",
      beneficio: "Menos falta, menos telefone tocando.",
      bullets: ["Confirmação no WhatsApp", "Encaixe de horário", "Agenda por profissional"]
    },
    {
      icone: "package",
      titulo: "Estoque simples",
      beneficio: "Só o que você precisa saber: o que tem e o que está acabando.",
      bullets: ["Entrada e saída", "Aviso de mínimo", "Custo por item"]
    },
    {
      icone: "receipt-text",
      titulo: "Ordem de serviço",
      beneficio: "Do orçamento à entrega, com o cliente sabendo onde está.",
      bullets: ["Status por etapa", "Fotos anexadas", "Aprovação por link"]
    },
    {
      icone: "chart-no-axes-column",
      titulo: "Painel do dono",
      beneficio: "Uma tela com o que decide o seu mês.",
      bullets: ["Entrada por período", "Ticket médio", "Comparação com mês passado"]
    }
  ]
} as const;

export const comoFunciona = {
  eyebrow: "Como funciona",
  titulo: "Esse é o nosso fluxo",
  passos: [
    { titulo: "Conversa", descricao: "Trinta minutos pra entender o que trava o seu dia." },
    { titulo: "Proposta", descricao: "Escopo, prazo e preço fechados por escrito." },
    { titulo: "Desenvolvimento", descricao: "A gente monta por partes e você vê funcionando." },
    { titulo: "Entrega", descricao: "Sistema no ar, time treinado, suporte aberto." }
  ]
};

export const portfolio = {
  eyebrow: "Trabalhos",
  titulo: "Projetos que já estão no ar",
  intro: "Cada card abre o projeto que está no ar. Pode entrar e ver funcionando.",
  casos: [
    {
      id: "vr-pilates",
      negocio: "VR Pilates",
      segmento: "Studio de pilates",
      icone: "heart-pulse",
      nota: "Landing page + sistema de aulas, com turmas e agenda dos alunos.",
      href: "https://vr-pilates.vercel.app/",
      imagem: "/trabalhos/vr-pilates.webp"
    },
    {
      id: "amazing-school",
      negocio: "Amazing School",
      segmento: "Escola de inglês",
      icone: "graduation-cap",
      nota: "Sistema completo de gestão da escola: alunos, turmas e rotina administrativa.",
      href: "https://amazing-school-app.vercel.app/",
      imagem: "/trabalhos/amazing-school.webp"
    },
    {
      id: "foco-contabil",
      negocio: "Foco Contábil",
      segmento: "Contabilidade",
      icone: "calculator",
      nota: "Sistema para gerenciamento de um escritório de contabilidade.",
      href: "https://foco-contabil.vercel.app/",
      imagem: "/trabalhos/foco-contabil.webp"
    },
    {
      id: "me-ajuda-ai",
      negocio: "Me Ajuda Aí",
      segmento: "Construção civil",
      icone: "hard-hat",
      nota: "SaaS que conecta clientes a prestadores de serviço de construção civil.",
      href: "https://meajudaai-jet.vercel.app/",
      imagem: "/trabalhos/me-ajuda-ai.webp"
    }
  ]
} as const;

export const confianca = {
  eyebrow: "Segurança e confiança",
  titulo: "Nos preocupamos com seus dados",
  itens: [
    { icone: "lock", titulo: "Seus dados são seus", descricao: "Você é o dono da base. Se quiser sair, a gente exporta tudo." },
    { icone: "shield-check", titulo: "Acesso por perfil", descricao: "Cada pessoa vê só o que precisa ver pro trabalho dela." },
    { icone: "hard-drive", titulo: "Backup diário", descricao: "Cópia automática todo dia, com histórico de trinta dias." },
    { icone: "file-check", titulo: "Contrato claro", descricao: "Escopo, prazo e preço por escrito antes de qualquer linha de código." }
  ]
} as const;

export const entregas = {
  eyebrow: "O que a gente entrega",
  titulo: "Do site simples ao sistema inteiro",
  intro: "Dá pra começar pelo que resolve agora e crescer depois.",
  itens: [
    {
      icone: "layout-template",
      tom: "malva",
      titulo: "Landing page",
      beneficio: "Uma página pra explicar o que você faz e receber contato.",
      bullets: ["Feita pro celular", "Formulário ou WhatsApp"]
    },
    {
      icone: "monitor",
      tom: "primary",
      titulo: "Sistema sob medida",
      beneficio: "Gestão do seu negócio numa tela que você entende.",
      bullets: ["Cadastros e rotina do dia", "Painel com o resultado"]
    },
    {
      icone: "cloud",
      tom: "rosa",
      titulo: "SaaS",
      beneficio: "Produto próprio, com contas de clientes e cobrança.",
      bullets: ["Login por perfil", "Cresce por módulos"]
    },
    {
      icone: "plug",
      tom: "malva",
      titulo: "Integrações",
      beneficio: "O que você já usa conversando com o sistema novo.",
      bullets: ["WhatsApp e pagamentos", "Importação de planilha"]
    }
  ]
} as const;

export const quemSomos = {
  eyebrow: "Quem somos",
  titulo: "Somos engenheiros de software",
  paragrafos: [
    "Acreditamos que a tecnologia deve estar a serviço das pessoas, e não o contrário. Nosso objetivo é ajudar pequenas e médias empresas a crescer, entregando sites e sistemas de qualidade, com um preço justo e pensados para as necessidades reais de cada negócio.",
    "Antes de escrever qualquer linha de código, queremos entender a sua realidade. Estamos aqui para ouvir, ajudar e caminhar junto com você até encontrar a melhor solução para o seu negócio."
  ],
  metafora: {
    label: "sob medida",
    corpo:
      "Sabemos que toda empresa é única. Cada uma tem seu jeito de trabalhar, seus desafios e seus objetivos. Então por que ela precisaria se contentar com um software genérico? Na Alfaiates Sistemas, pensamos como um alfaiate: medimos com atenção, conversamos com você e construímos uma solução sob medida.",
    fecho:
      "Aqui, é o sistema que se ajusta à sua empresa, e não a sua empresa que precisa se ajustar ao sistema."
  },
  convite:
    "Quer nos conhecer melhor? Acompanhe nosso trabalho no Instagram, ou fale diretamente com cada um de nós:",
  time: [
    {
      id: "matheus-monte",
      nome: "Matheus Monte",
      /** TODO(cliente): foto quadrada, mínimo 264x264, em public/time/ */
      foto: PENDENTE,
      linkedin: "https://www.linkedin.com/in/matheus-monte-7206941b6/",
      github: "https://github.com/matheus-emanuel"
    },
    {
      id: "leonardo-chalhoub",
      nome: "Leonardo Chalhoub",
      foto: PENDENTE,
      linkedin: "https://www.linkedin.com/in/leonardochalhoub/",
      github: "https://github.com/leonardochalhoub"
    },
    {
      id: "davi-roque",
      nome: "Davi Roque",
      foto: PENDENTE,
      linkedin: "https://www.linkedin.com/in/davi-r-62908b224/",
      github: "https://github.com/DRoqueProgrammer"
    }
  ]
};

export const faq = {
  eyebrow: "Perguntas",
  titulo: "O que perguntam antes de fechar",
  itens: [
    {
      pergunta: "Quanto tempo leva pra ficar pronto?",
      resposta:
        "Entre duas e seis semanas, dependendo do tamanho do projeto. Você recebe uma data na proposta e acompanha cada entrega."
    },
    {
      pergunta: "Quanto custa?",
      resposta:
        "O preço é fechado por escopo, não por hora. A gente só manda proposta depois da conversa de diagnóstico, e o valor não muda no meio do caminho."
    },
    {
      pergunta: "Funciona no celular?",
      resposta:
        "Sim. A gente desenha primeiro pra celular, porque é ali que você e o seu time trabalham."
    },
    {
      pergunta: "E se eu quiser mudar algo depois?",
      resposta: "Dá pra somar módulos ou ajustar o que já existe. Nada é refeito do zero."
    },
    {
      pergunta: "Vocabulário técnico eu não domino. Tem problema?",
      resposta:
        "Não. A gente explica em palavras normais, e quem constrói é quem responde quando você liga."
    },
    {
      pergunta: "Vocês atendem qualquer segmento?",
      resposta:
        "Atendemos negócios de serviço e de balcão: barbearia, clínica, oficina, loja, ateliê. Se não for o seu caso, a gente fala isso na primeira conversa."
    }
  ]
};

export const contato = {
  eyebrow: "Fale com a gente",
  titulo: "Conta como seu negócio funciona hoje",
  intro:
    "A conversa de diagnóstico é de graça e dura meia hora. Se não fizer sentido pra você, a gente fala.",
  reforco: "Orçamento fechado antes de começar",
  formTitulo: "Pedir orçamento",
  ctaWhatsapp: "Falar agora no WhatsApp",
  segmentos: [
    { value: "", label: "Escolhe o mais parecido" },
    { value: "barbearia", label: "Barbearia ou salão" },
    { value: "clinica", label: "Clínica ou consultório" },
    { value: "oficina", label: "Oficina ou assistência" },
    { value: "loja", label: "Loja ou balcão" },
    { value: "atelie", label: "Ateliê ou produção" },
    { value: "escola", label: "Escola ou curso" },
    { value: "outro", label: "Outro" }
  ]
};
