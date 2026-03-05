"use client";

import { SectionHeading } from "@/components/atoms/section-heading";
import { GoldDivider } from "@/components/atoms/gold-divider";
import { TeamMemberCard } from "@/components/molecules/team-member-card";
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll";

const teamMembers = [
  {
    name: "Dr. Vitor Castro",
    oab: "OAB/AL 13.646",
    imageSrc: "/images/photos/vitor-castro.png",
  },
  {
    name: "Dr. Kleber Barros",
    oab: "OAB/AL 13.647",
    imageSrc: "/images/photos/kleber-barros.png",
  },
  {
    name: "Dr. Max Cavalcante",
    oab: "OAB/AL 13.648",
    imageSrc: "/images/photos/max-cavalcante.png",
  },
  {
    name: "Dra. Jéssica Júlia",
    oab: "OAB/AL 14.703",
    imageSrc: "/images/photos/jessica-julia.png",
  },
  {
    name: "Dr. Newton Vasconcelos",
    oab: "OAB/AL 15.607",
    imageSrc: "/images/photos/newton-vasconcelos.png",
  },
  {
    name: "Dr. Willames Oliveira",
    oab: "OAB/AL 16.291",
    imageSrc: "/images/photos/willames-oliveira.png",
  },
  {
    name: "Dr. Eduardo Anselmo",
    oab: "OAB/AL 18.213",
    imageSrc: "/images/photos/eduardo-anselmo.png",
  },
  {
    name: "Dra. Mariana Rodrigues",
    oab: "OAB/AL 19.017",
    imageSrc: "/images/photos/mariana-rodrigues.png",
  },
  {
    name: "Leangelo Berto",
    oab: "OAB/AL 15.548",
    imageSrc: "/images/photos/leangelo-berto.png",
  },
  {
    name: "Ynara Lima",
    oab: "OAB/AL 22.876",
    imageSrc: "/images/photos/ynara-lima.png",
  },
  {
    name: "Dr. Juranilson Júnior",
    oab: "OAB/AL 20.903",
    imageSrc: "/images/photos/juranilson-junior.png",
  },
  {
    name: "Dra. Mirian Monteiro",
    oab: "OAB/AL 20.744",
    imageSrc: "/images/photos/mirian-monteiro.png",
  },
  {
    name: "Arthur Antero",
    oab: "Assistente Jurídico",
    imageSrc: "/images/photos/arthur-antero.png",
  },
  {
    name: "Rosana Albuquerque",
    oab: "OAB/AL 22.502",
    imageSrc: "/images/photos/rosana-albuquerque.png",
  },
  {
    name: "Emilly Maia",
    oab: "Assistente Jurídica",
    imageSrc: "/images/photos/emilly-maia.png",
  },
];

export function TeamSection() {
  return (
    <section id="equipe" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll variant="fade-up">
          <SectionHeading className="mb-2 text-center">
            Equipe CBC Advocacia
          </SectionHeading>
          <GoldDivider className="mx-auto mb-16 max-w-xs" />
        </AnimateOnScroll>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {teamMembers.map((member, idx) => (
            <AnimateOnScroll
              key={member.oab}
              variant="fade-up"
              delay={idx * 80}
            >
              <TeamMemberCard
                name={member.name}
                oab={member.oab}
                imageSrc={member.imageSrc}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
