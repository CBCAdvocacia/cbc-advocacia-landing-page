"use client"

import { type ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "scale" | "blur"

interface AnimateOnScrollProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  as?: "div" | "section" | "article" | "aside" | "header" | "footer"
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "translate-y-8 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  "fade-down": {
    hidden: "-translate-y-8 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  "fade-left": {
    hidden: "-translate-x-8 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  "fade-right": {
    hidden: "translate-x-8 opacity-0",
    visible: "translate-x-0 opacity-100",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  scale: {
    hidden: "scale-95 opacity-0",
    visible: "scale-100 opacity-100",
  },
  blur: {
    hidden: "opacity-0 blur-sm",
    visible: "opacity-100 blur-0",
  },
}

export function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className,
  threshold = 0.15,
  as: Component = "div",
}: AnimateOnScrollProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold })

  const styles = variantStyles[variant]

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all will-change-transform",
        isVisible ? styles.visible : styles.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </Component>
  )
}
