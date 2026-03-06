"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/atoms/section-heading";
import { GoldDivider } from "@/components/atoms/gold-divider";
import { AnimateOnScroll } from "@/components/atoms/animate-on-scroll";

const founders = [
  {
    name: "Dr. Vitor Castro",
    bio: [
      "<strong>Dr. Vitor Castro é o advogado responsável pela assessoria jurídica empresarial</strong> do escritório. Com boa formação acadêmica e vasta experiência prática, ele é <strong>pós-graduado em Ciências Criminais e, atualmente, está concluindo sua graduação em Advocacia Consultiva.</strong>",
      "Com um olhar atento para estratégias preventivas no campo jurídico, Dr. Vitor e sua equipe prestam assessoria a mais de 200 empresas em Arapiraca e região.",
      "Ao longo dos anos, ele tem <strong>conduzido com maestria sua equipe de consultoria e o atendimento ao cliente, focando em entender as necessidades dos empresários</strong> e encontrar soluções eficazes para suas questões.",
    ],
    imageSrc: "/images/photos/founder-vitor-castro.png",
  },
  {
    name: "Dr. Kleber Barros",
    bio: [
      "<strong>Dr. Kleber Barros é natural da cidade de Maceió, mas criou raízes em Arapiraca</strong> desde seus primeiros anos de vida, se considerando assim um filho da terra.",
      "Sua vocação para o direito surgiu bem cedo, ainda quando era estudante do ensino médio, e foi alimentada por sua mãe, <strong>Dra. Graça Rezende, procuradora do estado aposentada e nome de grande reconhecimento na comunidade jurídica local.</strong> Optando pelo foco em demandas voltadas a seara de famílias e sucessões, é <strong>pós graduado no tema e responsável pela coordenação de demandas cíveis do escritório</strong> ao longo dos seus 10 (dez) anos de experiência profissional.",
      "Tal atividade de alta complexidade e casos diversos, lhe trouxe sensibilidade e técnica para gerir negociações, sempre na busca do melhor resultado para nossos clientes. <strong>Envolvido em questões institucionais, é atualmente Conselheiro da OAB, subseção de Arapiraca.</strong>",
    ],
    imageSrc: "/images/photos/founder-kleber-barros.png",
  },
  {
    name: "Dr. Max Cavalcante",
    bio: [
      "Dr. Max Cavalcante é advogado especializado em Direito Trabalhista, com uma sólida formação acadêmica obtida no Cesama. Membro ativo da Comissão de Prerrogativas da OAB Arapiraca, ele tem se destacado pela sua <strong>expertise e comprometimento com a proteção dos direitos dos trabalhadores e empregadores.</strong>",
      "Com uma vasta experiência prática, ele já <strong>atuou em mais de 1500 processos trabalhistas, o que demonstra seu profundo conhecimento e habilidade na área.</strong> Dr. Maxilânio se dedica a oferecer <strong>soluções eficazes e estratégicas para as questões trabalhistas,</strong> sempre com um olhar atento às necessidades específicas de cada cliente.",
    ],
    imageSrc: "/images/photos/founder-max-cavalcante.png",
  },
];

export function FoundersSection() {
  return (
    <section
      id="socios"
      className="relative bg-card py-24 bg-pattern-lines md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimateOnScroll variant="fade-up">
          <SectionHeading className="mb-2 text-center">
            Sócios Fundadores
          </SectionHeading>
          <GoldDivider className="mx-auto mb-16 md:mb-24 max-w-xs" />
        </AnimateOnScroll>

        <div className="space-y-24 md:space-y-32">
          {founders.map((founder, index) => {
            // Verifica se é um item par para inverter o layout no desktop
            const isEven = index % 2 !== 0;

            return (
              <div
                key={founder.name}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                {/* Coluna de Texto */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <AnimateOnScroll
                    variant={isEven ? "fade-left" : "fade-right"}
                    delay={100}
                  >
                    <h3 className="mb-8 font-serif text-3xl font-light tracking-wide text-gold-light md:text-4xl">
                      {founder.name}
                    </h3>
                  </AnimateOnScroll>
                  <div className="space-y-5 text-muted-foreground">
                    {founder.bio.map((paragraph, idx) => (
                      <AnimateOnScroll
                        key={idx}
                        variant={isEven ? "fade-left" : "fade-right"}
                        delay={200 + idx * 100}
                      >
                        {/* Usamos dangerouslySetInnerHTML para renderizar a tag <strong> com segurança */}
                        <p
                          className="text-base leading-relaxed [&>strong]:font-semibold [&>strong]:text-foreground"
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>

                {/* Coluna da Imagem */}
                <AnimateOnScroll
                  variant={isEven ? "fade-right" : "fade-left"}
                  delay={300}
                  className={isEven ? "lg:order-1" : "lg:order-2"}
                >
                  <div className="relative mx-auto w-full max-w-md">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
