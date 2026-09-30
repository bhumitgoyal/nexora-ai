"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  /** id of the visible label — Radix puts role="slider" on the thumb, so the name goes there */
  "thumb-labelledby"?: string
  /** human-readable value for screen readers, e.g. "12 people" */
  valueText?: string
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, "thumb-labelledby": labelledBy, valueText, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex h-11 w-full touch-none select-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-[var(--color-border)]/15">
        <SliderPrimitive.Range className="absolute h-full bg-[var(--color-brand)]" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        aria-labelledby={labelledBy}
        aria-valuetext={valueText}
        className="block size-6 border-2 border-[var(--color-border)] bg-[var(--color-brand)] shadow-[var(--shadow-hard-sm)] transition-transform active:translate-x-px active:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      />
    </SliderPrimitive.Root>
  ),
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
