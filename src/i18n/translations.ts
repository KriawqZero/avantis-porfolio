export type Locale = 'pt' | 'en'

interface TranslationSchema {
  nav: {
    services: string
    contact: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    description: string
    cta: string
    ctaSecondary: string
    founderLabel: string
    founderName: string
    founderRole: string
  }
  services: {
    label: string
    title: string
    subtitle: string
    items: {
      title: string
      description: string
      pillars: string[]
    }[]
  }
  contact: {
    label: string
    title: string
    description: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
    portfolioLabel: string
    ctaEmail: string
    availability: string
    responseTime: string
  }
  footer: {
    rights: string
    tagline: string
  }
}

export const translations: Record<Locale, TranslationSchema> = {
  pt: {
    nav: {
      services: 'Serviços',
      contact: 'Contato',
    },
    hero: {
      badge: 'Estúdio de Tecnologia',
      title: 'Produtos digitais com estratégia e engenharia de alta qualidade.',
      subtitle: 'Avantis Studio',
      description: 'Transformamos ideias em produtos digitais completos. Da arquitetura backend ao frontend moderno, entregamos soluções escaláveis com foco em resultados reais.',
      cta: 'Iniciar um projeto',
      ctaSecondary: 'Conhecer serviços',
      founderLabel: 'Fundador & Lead Engineer',
      founderName: 'Marcilio Ortiz',
      founderRole: 'Desenvolvedor Full Stack TypeScript com atuação profissional desde 2025 e jornada de programação iniciada em 2017.',
    },
    services: {
      label: 'Serviços',
      title: 'O que entregamos',
      subtitle: 'Soluções end-to-end para o seu negócio, do planejamento à entrega em produção.',
      items: [
        {
          title: 'Arquitetura & Backend',
          description: 'APIs escaláveis, integrações seguras e arquitetura modular orientada a domínio.',
          pillars: ['NestJS & TypeScript', 'Laravel & PHP', 'PostgreSQL, MySQL, Redis'],
        },
        {
          title: 'Frontend & Experiência',
          description: 'Interfaces modernas, responsivas e performáticas em qualquer dispositivo.',
          pillars: ['React & Next.js', 'Inertia.js & Vue', 'TailwindCSS & Design Systems'],
        },
        {
          title: 'DevOps & Infraestrutura',
          description: 'Deploy automatizado, containerização e infraestrutura cloud sob medida.',
          pillars: ['Docker & CI/CD', 'AWS (S3, VPC)', 'NGINX & Monitoramento'],
        },
      ],
    },
    contact: {
      label: 'Contato',
      title: 'Vamos conversar sobre o seu projeto.',
      description: 'Estamos disponíveis para novos projetos. Fale conosco para discutir APIs escaláveis, produtos full stack ou integrações complexas.',
      emailLabel: 'E-mail',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      portfolioLabel: 'Portfolio',
      ctaEmail: 'Enviar e-mail',
      availability: 'Disponível para novos projetos',
      responseTime: 'Respondemos em até 24h úteis',
    },
    footer: {
      rights: `© ${new Date().getFullYear()} Avantis Studio. Todos os direitos reservados.`,
      tagline: 'Construindo produtos com design e tecnologia.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      badge: 'Technology Studio',
      title: 'Digital products with strategy and high-quality engineering.',
      subtitle: 'Avantis Studio',
      description: 'We transform ideas into complete digital products. From backend architecture to modern frontend, we deliver scalable solutions focused on real results.',
      cta: 'Start a project',
      ctaSecondary: 'View services',
      founderLabel: 'Founder & Lead Engineer',
      founderName: 'Marcilio Ortiz',
      founderRole: 'Full Stack TypeScript Developer working professionally since 2025, coding since 2017.',
    },
    services: {
      label: 'Services',
      title: 'What we deliver',
      subtitle: 'End-to-end solutions for your business, from planning to production deployment.',
      items: [
        {
          title: 'Architecture & Backend',
          description: 'Scalable APIs, secure integrations and domain-driven modular architecture.',
          pillars: ['NestJS & TypeScript', 'Laravel & PHP', 'PostgreSQL, MySQL, Redis'],
        },
        {
          title: 'Frontend & Experience',
          description: 'Modern, responsive and performant interfaces across every device.',
          pillars: ['React & Next.js', 'Inertia.js & Vue', 'TailwindCSS & Design Systems'],
        },
        {
          title: 'DevOps & Infrastructure',
          description: 'Automated deployment, containerization and tailored cloud infrastructure.',
          pillars: ['Docker & CI/CD', 'AWS (S3, VPC)', 'NGINX & Monitoring'],
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: "Let's talk about your project.",
      description: "We're available for new projects. Reach out to discuss scalable APIs, full stack products or complex integrations.",
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      portfolioLabel: 'Portfolio',
      ctaEmail: 'Send email',
      availability: 'Available for new projects',
      responseTime: 'We respond within 24 business hours',
    },
    footer: {
      rights: `© ${new Date().getFullYear()} Avantis Studio. All rights reserved.`,
      tagline: 'Building products with design and technology.',
    },
  },
}
