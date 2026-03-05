import Image from "next/image"
import { cn } from "@/lib/utils"

interface OfficeGalleryProps {
  name: string
  imageSrc: string
  className?: string
}

export function OfficeGallery({
  name,
  imageSrc,
  className,
}: OfficeGalleryProps) {
  return (
    <div className={cn("group overflow-hidden", className)}>
      <h3 className="mb-4 text-center font-serif text-2xl font-light tracking-[0.3em] text-foreground uppercase md:text-3xl">
        {name}
      </h3>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={`Unidade ${name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}
