import { cn } from "@/lib/utils"

interface GoldDividerProps {
  className?: string
}

export function GoldDivider({ className }: GoldDividerProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="h-px flex-1 bg-gold/30" />
      <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <div className="h-px flex-1 bg-gold/30" />
    </div>
  )
}
