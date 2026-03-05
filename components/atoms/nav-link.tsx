import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm tracking-wider text-muted-foreground uppercase transition-colors duration-200 hover:text-gold",
        className
      )}
    >
      {children}
    </a>
  )
}
