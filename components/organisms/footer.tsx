import Image from "next/image";
import { GoldDivider } from "@/components/atoms/gold-divider";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/logo-cbc.png"
              alt="CBC Advocacia Especializada"
              width={80}
              height={80}
              className="mb-4 brightness-0 invert opacity-80"
            />
            <span className="block font-serif text-2xl font-semibold tracking-wider text-gold-light">
              CBC
            </span>
            <span className="mb-4 block text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Advocacia Especializada
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Castro Barros Cavalcante - Qualidade, eficiência e excelência na
              prestação de serviços jurídicos há mais de 9 anos.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-foreground uppercase">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Rua Brasília, Nº 434, bairro Brasília, Arapiraca, AL - Sede
                  Principal
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm text-muted-foreground">(82) 9333-6600</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm text-muted-foreground">
                  contato@cbcadvocacia.com.br
                </p>
              </div>
            </div>
          </div>

          {/* Social + Locations */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-foreground uppercase">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cbcadvocacia/"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:border-gold/40 hover:text-gold"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Acompanhe nossos conteúdos e fique por dentro das novidades
              jurídicas.
            </p>
          </div>
        </div>

        <GoldDivider className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CBC Advocacia Especializada. Todos
            os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            CNPJ: 36.630.969/0001-93
          </p>
          <p className="text-xs text-muted-foreground">
            Castro Barros Cavalcante - Advocacia Especializada
          </p>
        </div>
      </div>
    </footer>
  );
}
