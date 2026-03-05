"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/atoms/section-heading";
import { GoldDivider } from "@/components/atoms/gold-divider";
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll";

export function CommunitySection() {
  return (
    <section className="bg-background py-24 bg-pattern-lines md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Fazendo Negócios Direito */}
        <div className="mb-24">
          <AnimateOnScroll variant="fade-up">
            <SectionHeading className="mb-2 text-center">
              Fazendo Negócios Direito
            </SectionHeading>
            <GoldDivider className="mx-auto mb-12 max-w-xs" />
          </AnimateOnScroll>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll variant="fade-right" delay={200}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/fazendo-neg-dir.png"
                  alt="Equipe do Fazendo Negócios Direito reunida"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" delay={350}>
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">
                    O Fazendo Negócios Direito
                  </strong>{" "}
                  tem como objetivo fornecer informações relevantes para
                  empresários de maneira simples e descomplicada.{" "}
                  <strong className="text-foreground">
                    Nosso foco é esclarecer temas jurídicos de forma acessível
                    através de diversos formatos, como palestras, grupos de
                    WhatsApp, conteúdos no Instagram e podcasts.
                  </strong>{" "}
                  Com a proposta de eliminar a burocracia e facilitar o
                  entendimento, buscamos oferecer insights práticos que ajudam
                  os empresários a tomar decisões informadas e a gerir seus
                  negócios com mais eficiência.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Participação institucional */}
        <div>
          <AnimateOnScroll variant="fade-up">
            <SectionHeading className="mb-2 text-center" as="h3">
              Participação Institucional
            </SectionHeading>
            <GoldDivider className="mx-auto mb-12 max-w-xs" />
          </AnimateOnScroll>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll
              variant="fade-right"
              delay={200}
              className="lg:order-2"
            >
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Participação, como representantes da OAB, em{" "}
                  <strong className="text-foreground">
                    eventos relevantes do sistema de segurança pública,
                  </strong>{" "}
                  como curso de nivelamento da polícia penal.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll
              variant="fade-left"
              delay={350}
              className="lg:order-1"
            >
              <div className="relative aspect-[11/10] overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-rf01cN3Nv2SDRG1fXhdgQVwSJ1Txk5.png"
                  alt="Participação em eventos institucionais como representantes da OAB"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
