import Image from "next/image";
import { cn } from "@/lib/utils";

interface OfficeGalleryProps {
  name: string;
  imageSrc?: string;
  images?: string[];
  className?: string;
}

export function OfficeGallery({
  name,
  imageSrc,
  images,
  className,
}: OfficeGalleryProps) {
  if (images && images.length > 0) {
    return (
      <div
        className={cn(
          "overflow-hidden rounded-lg bg-black px-6 py-10 md:px-10 md:py-14",
          className,
        )}
      >
        <h3 className="mb-8 text-center font-serif text-3xl font-light tracking-[0.4em] text-white uppercase md:text-4xl">
          {name}
        </h3>
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 md:gap-4">
          {images.map((src, idx) => (
            <div
              key={src}
              className="group relative aspect-square overflow-hidden rounded-md md:aspect-4/3"
            >
              <Image
                src={src}
                alt={`Unidade ${name} - foto ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("group overflow-hidden", className)}>
      <div className="relative aspect-9/16 overflow-hidden rounded-lg">
        <Image
          src={imageSrc as string}
          alt={`Unidade ${name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
