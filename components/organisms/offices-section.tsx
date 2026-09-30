"use client";

import { SectionHeading } from "@/components/atoms/section-heading";
import { GoldDivider } from "@/components/atoms/gold-divider";
import { OfficeGallery } from "@/components/molecules/office-gallery";
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll";

const offices = [
  {
    name: "Maceió",
    imageSrc: "/images/uni-maceio.png",
  },
  {
    name: "Teotônio Vilela",
    imageSrc: "/images/uni-teotonio-vilela.png",
  },
  {
    name: "Junqueiro",
    imageSrc: "/images/uni-junqueiro.png",
  },
  {
    name: "Palmeira dos Índios",
    imageSrc: "/images/uni-palm-dos-indios.png",
  },
  {
    name: "Arapiraca",
    images: [
      "/images/office-arapiraca-01.jpg",
      "/images/office-arapiraca-02.jpg",
      "/images/office-arapiraca-03.jpg",
      "/images/office-arapiraca-04.jpg",
      "/images/office-arapiraca-05.jpg",
      "/images/office-arapiraca-06.jpg",
    ],
  },
];

export function OfficesSection() {
  return (
    <section id="unidades" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll variant="fade-up">
          <SectionHeading className="mb-2 text-center">
            Nossas Unidades
          </SectionHeading>
          <GoldDivider className="mx-auto mb-6 max-w-xs" />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={150}>
          <p className="mx-auto mb-16 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Presente em Arapiraca, Maceió, Teotônio Vilela, Junqueiro, São
            Sebastião e Palmeira dos Índios, fortalecendo nossa presença
            regional.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-12 md:grid-cols-2">
          {offices.map((office, idx) => (
            <AnimateOnScroll
              key={office.name}
              variant="fade-up"
              delay={idx * 200}
              className={office.images ? "md:col-span-2" : undefined}
            >
              <OfficeGallery
                name={office.name}
                imageSrc={office.imageSrc}
                images={office.images}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
