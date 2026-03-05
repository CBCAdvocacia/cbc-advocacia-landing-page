"use client"

import { SectionHeading } from "@/components/atoms/section-heading"
import { GoldDivider } from "@/components/atoms/gold-divider"
import { TeamMemberCard } from "@/components/molecules/team-member-card"
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll"

const teamMembers = [
  {
    name: "Dr. Vitor Castro",
    oab: "OAB/AL 13.646",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-aMVlqFfy9ZxQ91b3MO39K50oXAxqeX.png",
  },
  {
    name: "Dr. Kleber Barros",
    oab: "OAB/AL 13.647",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-aMVlqFfy9ZxQ91b3MO39K50oXAxqeX.png",
  },
  {
    name: "Dr. Max Cavalcante",
    oab: "OAB/AL 13.648",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-aMVlqFfy9ZxQ91b3MO39K50oXAxqeX.png",
  },
  {
    name: "Dra. Jéssica Júlia",
    oab: "OAB/AL 14.703",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-aMVlqFfy9ZxQ91b3MO39K50oXAxqeX.png",
  },
  {
    name: "Dr. Newton Vasconcelos",
    oab: "OAB/AL 15.607",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-aMVlqFfy9ZxQ91b3MO39K50oXAxqeX.png",
  },
  {
    name: "Dr. Willames Oliveira",
    oab: "OAB/AL 16.291",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-aMVlqFfy9ZxQ91b3MO39K50oXAxqeX.png",
  },
  {
    name: "Dr. Eduardo Anselmo",
    oab: "OAB/AL 18.213",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-aMVlqFfy9ZxQ91b3MO39K50oXAxqeX.png",
  },
  {
    name: "Dra. Mariana Rodrigues",
    oab: "OAB/AL 19.017",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-aMVlqFfy9ZxQ91b3MO39K50oXAxqeX.png",
  },
  {
    name: "Leangelo Berto",
    oab: "OAB/AL 15.548",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-aMVlqFfy9ZxQ91b3MO39K50oXAxqeX.png",
  },
]

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
            <AnimateOnScroll key={member.oab} variant="fade-up" delay={idx * 80}>
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
  )
}
