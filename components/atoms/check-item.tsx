import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CheckItemProps {
  children: React.ReactNode
  className?: string
}

export function CheckItem({ children, className }: CheckItemProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-gold/20 text-gold">
        <Check className="h-4 w-4" />
      </div>
      <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
        {children}
      </span>
    </div>
  )
}
