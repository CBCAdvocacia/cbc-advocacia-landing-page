import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3"
}

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-serif text-4xl font-light tracking-wide text-gold-light uppercase md:text-5xl lg:text-6xl",
        className
      )}
    >
      {children}
    </Tag>
  )
}
