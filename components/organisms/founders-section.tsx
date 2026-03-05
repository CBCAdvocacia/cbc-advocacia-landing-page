"use client"

import Image from "next/image"
import { SectionHeading } from "@/components/atoms/section-heading"
import { GoldDivider } from "@/components/atoms/gold-divider"
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll"

const founders = [
  {
    name: "Dr. Kleber Barros",
    bio: [
      {
        text: "Dr. Kleber Barros é natural da cidade de Maceió, mas criou raízes em Arapiraca desde seus primeiros anos de vida, se considerando assim um filho da terra.",
        bold: true,
      },
      {
        text: "Sua vocação para o direito surgiu bem cedo, ainda quando era estudante do ensino médio, e foi alimentada por sua mãe, Dra. Graça Rezende, procuradora do estado aposentada e nome de grande reconhecimento na comunidade jurídica local. Optando pelo foco em demandas voltadas a seara de famílias e sucessões, é pós graduado no tema e responsável pela coordenação de demandas cíveis do escritório ao longo dos seus 9 (nove) anos de experiência profissional.",
        bold: false,
      },
      {
        text: "Tal atividade de alta complexidade e casos diversos, lhe trouxe sensibilidade e técnica para gerir negociações, sempre na busca do melhor resultado para nossos clientes. Envolvido em questões institucionais, é atualmente Conselheiro da OAB, subseção de Arapiraca.",
        bold: false,
      },
    ],
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-rqYWlXs7Jbnti0WK3NNMI0KRBrEn6I.png",
  },
]

export function FoundersSection() {
  return (
    <section
      id="socios"
      className="relative bg-card py-24 bg-pattern-lines md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll variant="fade-up">
          <SectionHeading className="mb-2 text-center">
            Sócios Fundadores
          </SectionHeading>
          <GoldDivider className="mx-auto mb-16 max-w-xs" />
        </AnimateOnScroll>

        {founders.map((founder) => (
          <div
            key={founder.name}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            {/* Text column */}
            <div>
              <AnimateOnScroll variant="fade-right" delay={100}>
                <h3 className="mb-8 font-serif text-3xl font-light tracking-wide text-gold-light md:text-4xl">
                  {founder.name}
                </h3>
              </AnimateOnScroll>
              <div className="space-y-5">
                {founder.bio.map((paragraph, idx) => (
                  <AnimateOnScroll key={idx} variant="fade-right" delay={200 + idx * 150}>
                    <p
                      className={`text-base leading-relaxed ${
                        paragraph.bold
                          ? "font-semibold text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {paragraph.text}
                    </p>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Image column */}
            <AnimateOnScroll variant="fade-left" delay={300}>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={founder.imageSrc}
                    alt={`Foto de ${founder.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        ))}
      </div>
    </section>
  )
}
