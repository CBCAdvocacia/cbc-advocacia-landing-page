import Image from "next/image"
import { cn } from "@/lib/utils"

interface TeamMemberCardProps {
  name: string
  oab: string
  imageSrc: string
  className?: string
}

export function TeamMemberCard({
  name,
  oab,
  imageSrc,
  className,
}: TeamMemberCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-gold/40",
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Foto de ${name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>
      <div className="bg-charcoal-light/90 p-3 text-center backdrop-blur-sm">
        <h3 className="text-sm font-semibold text-foreground md:text-base">
          {name}
        </h3>
        <p className="text-xs text-muted-foreground">{oab}</p>
      </div>
    </div>
  )
}
