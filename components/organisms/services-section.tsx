"use client"

import { SectionHeading } from "@/components/atoms/section-heading"
import { GoldDivider } from "@/components/atoms/gold-divider"
import { ServiceCard } from "@/components/molecules/service-card"
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll"
import {
  Stamp,
  Building2,
  FileText,
  Users,
  Briefcase,
} from "lucide-react"

const services = [
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
]

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
            <AnimateOnScroll key={service.title} variant="fade-up" delay={idx * 100}>
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
  )
}
