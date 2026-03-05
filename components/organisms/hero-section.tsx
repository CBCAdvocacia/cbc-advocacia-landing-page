"use client"

import Image from "next/image"
import { GoldDivider } from "@/components/atoms/gold-divider"
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-pattern-lines">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ZXVTPIf28ep7H2weKHUFMQmBPNKTsd.png"
          alt="Fachada do escritório CBC Advocacia Especializada"
          fill
          className="object-cover object-top opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <AnimateOnScroll variant="fade-down" duration={900}>
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo-cbc.png"
              alt="CBC Advocacia Especializada"
              width={120}
              height={120}
              className="brightness-0 invert opacity-90"
              priority
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade" duration={1000} delay={200}>
          <h1 className="mb-2 font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Castro Barros Cavalcante
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" duration={900} delay={400}>
          <p className="mb-6 font-serif text-xl font-light tracking-wider text-gold-light md:text-2xl">
            Advocacia Especializada
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade" delay={600}>
          <GoldDivider className="mx-auto mb-8 max-w-xs" />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={700}>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            Qualidade, eficiência e excelência na prestação de serviços jurídicos.
            Mais de 9 anos de experiência em assessoria jurídica empresarial.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={900}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#escritorio"
              className="inline-flex items-center gap-2 rounded-sm border border-gold bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-background uppercase transition-all duration-200 hover:bg-gold-light"
            >
              Conheça o Escritório
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-sm border border-gold/40 px-8 py-3 text-sm font-semibold tracking-wider text-gold uppercase transition-all duration-200 hover:border-gold hover:bg-gold/10"
            >
              Fale Conosco
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border-2 border-gold/40">
          <div className="mx-auto mt-2 h-2 w-1 animate-bounce rounded-full bg-gold" />
        </div>
      </div>
    </section>
  )
}
