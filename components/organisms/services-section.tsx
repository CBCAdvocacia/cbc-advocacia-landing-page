"use client";

import { SectionHeading } from "@/components/atoms/section-heading";
import { GoldDivider } from "@/components/atoms/gold-divider";
import { ServiceCard } from "@/components/molecules/service-card";
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll";
import {
  Stamp,
  Building2,
  FileText,
  Users,
  Briefcase,
  Calculator, // Para Tributário
  Landmark, // Para Bancário
  Scale, // Para Cível
  Gavel, // Para Penal
  ShieldCheck, // Para Digital
  Home, // Para Imobiliário
  ShoppingCart, // Para Consumidor
  Umbrella, // Para Previdenciário (proteção)
  Heart, // Para Família
  ScrollText, // Para Sucessório
  Leaf, // Para Ambiental
  ClipboardList, // Para Administrativo
} from "lucide-react";

const services = [
  // --- ITENS ORIGINAIS ---
  {
    title: "Registro de Marca",
    description:
      "O serviço de registro de marca abrange desde a pesquisa de viabilidade até a proteção pós-registro. O escritório orienta na escolha da marca, elabora o pedido, protocola junto ao INPI e acompanha todas as etapas, incluindo eventuais oposições. Após a concessão, também cuida da renovação e defesa da marca contra infrações.",
    icon: Stamp,
  },
  {
    title: "Direito Empresarial",
    description:
      "Com a atuação preventiva e/ou contenciosa envolvendo as relações societárias, visando à proteção da sociedade empresária e seus sócios por meio da regulamentação dos direitos e deveres dos sócios/acionistas, elaboração e revisão de contratos empresariais.",
    icon: Building2,
  },
  {
    title: "Direito Contratual",
    description:
      "Atuamos de forma preventiva e contenciosa na elaboração, revisão e análise de contratos empresariais, assegurando que as relações comerciais estejam juridicamente protegidas. Nosso objetivo é reduzir riscos e evitar prejuízos que possam comprometer a segurança e a continuidade dos negócios.",
    icon: FileText,
  },
  {
    title: "Direito Societário",
    description:
      "O Direito Societário regula as relações entre sócios e entre a empresa e terceiros, abrangendo a constituição, organização, funcionamento e dissolução de sociedades, além de temas como responsabilidade dos sócios, capital social, governança, fusões, aquisições e reestruturações.",
    icon: Users,
  },
  {
    title: "Direito Trabalhista",
    description:
      "Contamos com uma equipe especializada em Direito e Processo do Trabalho, pronta para atender empresas e pessoas físicas com excelência. Atuamos de forma preventiva, orientando na gestão de riscos trabalhistas e no cumprimento das exigências legais. Também estamos preparados para representar nossos clientes em litígios judiciais e administrativos.",
    icon: Briefcase,
  },

  // --- ITENS ADICIONADOS DAS IMAGENS ---
  {
    title: "Direito Tributário",
    description:
      "Oferecemos assessoria estratégica para empresas que buscam segurança fiscal e eficiência na gestão de tributos. Atuamos na prevenção de passivos fiscais, no planejamento tributário, na análise de riscos e no acompanhamento de fiscalizações. Também representamos nossos clientes em defesas administrativas e judiciais, garantindo a proteção de seus interesses frente ao Fisco.",
    icon: Calculator,
  },
  {
    title: "Direito Bancário",
    description:
      "O Direito Bancário regula as atividades das instituições financeiras e as relações com seus clientes, abrangendo contratos, supervisão bancária, proteção ao consumidor, transparência e prevenção de práticas abusivas. Atua também na resolução de disputas entre clientes e instituições financeiras.",
    icon: Landmark,
  },
  {
    title: "Direito Cível",
    description:
      "Com a atuação preventiva e/ou contenciosa envolvendo atividades corporativas, indenizações, inventários, usucapião, entre outros, atendendo desde os casos mais simples aos mais complexos, em prol de defender integralmente o direito do empresário.",
    icon: Scale,
  },
  {
    title: "Direito Penal",
    description:
      "O Direito Penal regula crimes e suas punições, protegendo bens essenciais como vida, liberdade e patrimônio. No CBC Advocacia, atuamos com defesas estratégicas em crimes econômicos, financeiros e casos complexos, oferecendo análises aprofundadas para soluções eficazes e personalizadas",
    icon: Gavel,
  },
  {
    title: "Direito Digital (LGPD)",
    description:
      "Oferecemos suporte em proteção de dados, contratos digitais e propriedade intelectual, garantindo conformidade com leis como LGPD e GDPR. Auxiliamos na implementação de políticas de segurança, revisão contratual, proteção de marcas e patentes, assegurando que nossos clientes atuem com segurança e confiança no ambiente digital.",
    icon: ShieldCheck,
  },
  {
    title: "Direito Imobiliário",
    description:
      "Atuamos preventivamente nas relações jurídicas imobiliárias, com análise documental, elaboração de contratos seguros e gestão de taxas e impostos. Especializados em condomínios, imobiliárias e construtoras, oferecemos segurança jurídica alinhada às responsabilidades específicas de cada segmento.",
    icon: Home,
  },
  {
    title: "Direito do Consumidor",
    description:
      "Nosso escritório atua na orientação e defesa em questões de direito do consumidor, tanto na esfera administrativa quanto judicial. Oferecemos prevenção por meio da revisão de contratos e representamos clientes em processos envolvendo Procon, Ministério Público, Juizados Especiais e Justiça Comum, garantindo suporte completo em reclamações e pedidos de indenização.",
    icon: ShoppingCart,
  },
  {
    title: "Direito de Família",
    description:
      "O Direito de Família é uma área em que o escritório se destaca pela experiência e especialização. Esse ramo abrange diversos aspectos da vida cotidiana, como: divórcio, reconhecimento e dissolução de união estável, investigação de paternidade, pensão alimentícia, sucessão, guarda compartilhada, tutela e curatela e alienação parental.",
    icon: Heart,
  },
  {
    title: "Direito Sucessório",
    description:
      "O Direito Sucessório trata da transmissão de bens do falecido aos herdeiros, abrangendo o processo de inventário, administração da herança e partilha. A escolha do procedimento adequado e a organização sucessória antecipada garantem economia, celeridade e segurança jurídica, além de evitar conflitos entre herdeiros.",
    icon: ScrollText,
  },
  {
    title: "Direito Ambiental",
    description:
      "Oferecemos suporte especializado em direito ambiental, com consultoria em licenciamento, análise de impacto e conformidade legal. Atuamos na defesa em contenciosos, resolução de conflitos e representação judicial e administrativa, além de assessorar em responsabilidade ambiental e práticas sustentáveis para minimizar riscos.",
    icon: Leaf,
  },
  {
    title: "Direito Administrativo",
    description:
      "Com atuação preventiva mediante o requerimento de licenças e autorização perante o Poder Público (município, estado e união), ações contenciosas que advém de qualquer relação com os entes públicos, autarquias, agências reguladoras, participação em processos de licitação podem ser uma grande oportunidade de negócio para o empresário. O acompanhamento jurídico pode ser essencial cumprir os requisitos e condições edital ou do instrumento convocatório",
    icon: ClipboardList,
  },
  {
    title: "Direito Previdenciário",
    description:
      "Nosso setor previdenciário é especializado em lidar com uma ampla gama de questões relacionadas à seguridade social, incluindo aposentadorias, pensões, auxílios e benefícios assistenciais. Adotamos uma abordagem detalhada e minuciosa em cada caso, com foco especial na análise documental. Esse processo é essencial para verificar o histórico contributivo do segurado, garantindo que todos os requisitos necessários sejam atendidos para a concessão dos benefícios previdenciários.\n\nAlém disso, no auxílio às empresas, trabalhamos de forma preventiva e estratégica, contribuindo para a sustentabilidade financeira, enquanto garantimos a conformidade com as obrigações legais e a proteção dos direitos previdenciários de seus funcionários.",
    icon: Umbrella,
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative bg-background py-24 bg-pattern-lines md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll variant="fade-up">
          <SectionHeading className="mb-2 text-center">
            Áreas de Atuação
          </SectionHeading>
          <GoldDivider className="mx-auto mb-16 max-w-xs" />
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <AnimateOnScroll
              key={service.title}
              variant="fade-up"
              delay={idx * 100}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
