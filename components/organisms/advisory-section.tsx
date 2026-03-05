"use client"

import Image from "next/image"
import { SectionHeading } from "@/components/atoms/section-heading"
import { GoldDivider } from "@/components/atoms/gold-divider"
import { CheckItem } from "@/components/atoms/check-item"
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll"

const advisoryServices = [
  "Pareceres",
  "Consultorias",
  "Atuação Processual",
  "Audiências",
  "Gestão de Riscos Trabalhista",
  "Gestão Contratual",
  "Gestão Consumeirista",
  "Concessão e Recuperação de Crédito",
  "Planejamento Tributário",
  "Registro de Marca",
  "Reuniões",
  "Licitações",
]

export function AdvisorySection() {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll variant="fade-up">
          <SectionHeading className="mb-2 text-center">
            Assessoria Jurídica
          </SectionHeading>
          <GoldDivider className="mx-auto mb-12 max-w-xs" />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={200}>
          <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            <strong className="text-foreground">
              A assessoria jurídica para empresa envolve a advocacia preventiva e litigiosa,
            </strong>{" "}
            possuindo como principal objetivo a proteção da empresa assessorada por meio do sistema de gestão
            de riscos jurídicos, apresentando possíveis soluções a serem desenvolvidas nas mais diversas áreas
            do direito, buscando defender os interesses da empresa.
          </p>
        </AnimateOnScroll>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advisoryServices.map((service, idx) => (
            <AnimateOnScroll key={service} variant="fade-up" delay={100 + idx * 60}>
              <CheckItem>{service}</CheckItem>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Office image */}
        <AnimateOnScroll variant="scale" delay={200}>
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-yNOd6Jv9A070Fu2pkEe9Y9LNvTBwlP.png"
              alt="Sala de trabalho do escritório CBC Advocacia"
              fill
              className="object-cover object-bottom"
              sizes="100vw"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
