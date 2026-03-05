"use client"

import Image from "next/image"
import { SectionHeading } from "@/components/atoms/section-heading"
import { GoldDivider } from "@/components/atoms/gold-divider"
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll"

export function AboutSection() {
  return (
    <section id="escritorio" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll variant="fade-up">
          <SectionHeading className="mb-6 text-center">
            O Escritório
          </SectionHeading>
          <GoldDivider className="mx-auto mb-16 max-w-xs" />
        </AnimateOnScroll>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Image */}
          <AnimateOnScroll variant="fade-right" delay={200}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ZXVTPIf28ep7H2weKHUFMQmBPNKTsd.png"
                alt="Fachada do escritório CBC Advocacia em Arapiraca"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <div className="space-y-6">
            <AnimateOnScroll variant="fade-left" delay={300}>
              <p className="text-base leading-relaxed text-muted-foreground">
                O <strong className="text-foreground">CBC Advocacia Especializada</strong> é um escritório reconhecido em{" "}
                <strong className="text-foreground">Arapiraca/AL</strong> e em toda a região pela qualidade, eficiência e
                excelência na prestação de serviços jurídicos.{" "}
                <strong className="text-foreground">Com mais de nove anos de experiência,</strong> destacamo-nos pela forma
                estratégica com que conduzimos cada demanda, sempre com foco em resultados sólidos, responsabilidade técnica
                e proximidade com o cliente.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-left" delay={450}>
              <p className="text-base leading-relaxed text-muted-foreground">
                <strong className="text-foreground">
                  Contamos com uma equipe multidisciplinar composta por mais de 50 colaboradores, entre advogados e
                  profissionais especializados, atuando com agilidade, ética e compromisso. Além da sede em Arapiraca,
                  possuímos unidades em Teotônio Vilela, Junqueiro, São Sebastião, Palmeira dos Índios e Maceió,
                </strong>{" "}
                o que fortalece nossa presença regional e a agilidade na resposta às necessidades dos clientes.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-left" delay={600}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Nosso foco principal é a{" "}
                <strong className="text-foreground">
                  assessoria jurídica para empresas, oferecendo suporte completo e contínuo que garante ao empresário estar
                  alinhado com as normas legais, boas práticas e condutas adequadas,
                </strong>{" "}
                contribuindo para a prevenção de litígios judiciais e para a tomada de decisões mais seguras.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-left" delay={750}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Nossa assessoria é ampla, envolvendo tanto o acompanhamento cotidiano das rotinas empresariais quanto a
                elaboração de contratos, pareceres técnicos, orientações estratégicas e defesas processuais quando necessário.
              </p>
            </AnimateOnScroll>

            {/* Stats */}
            <AnimateOnScroll variant="fade-up" delay={900}>
              <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
                <div className="text-center">
                  <span className="block font-serif text-3xl font-light text-gold md:text-4xl">9+</span>
                  <span className="mt-1 block text-xs tracking-wider text-muted-foreground uppercase">
                    Anos de Experiência
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-serif text-3xl font-light text-gold md:text-4xl">50+</span>
                  <span className="mt-1 block text-xs tracking-wider text-muted-foreground uppercase">
                    Colaboradores
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-serif text-3xl font-light text-gold md:text-4xl">6</span>
                  <span className="mt-1 block text-xs tracking-wider text-muted-foreground uppercase">
                    Unidades
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
