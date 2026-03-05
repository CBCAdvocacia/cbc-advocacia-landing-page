"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { NavLink } from "@/components/atoms/nav-link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#escritorio", label: "O Escritório" },
  { href: "#socios", label: "Sócios" },
  { href: "#equipe", label: "Equipe" },
  { href: "#servicos", label: "Serviços" },
  { href: "#unidades", label: "Unidades" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo-cbc.png"
            alt="CBC Advocacia Especializada"
            width={48}
            height={48}
            className={cn(
              "transition-all duration-300",
              isScrolled ? "brightness-0 invert opacity-80" : "brightness-0 invert opacity-90"
            )}
          />
          <div className="hidden flex-col sm:flex">
            <span className="font-serif text-lg font-semibold leading-tight tracking-wider text-gold-light">
              CBC
            </span>
            <span className="text-[9px] leading-tight tracking-[0.15em] text-muted-foreground uppercase">
              Advocacia Especializada
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-foreground lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isMobileOpen && (
        <nav
          className="border-t border-border bg-background/98 px-6 py-6 backdrop-blur-md lg:hidden"
          aria-label="Menu mobile"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="text-base"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
